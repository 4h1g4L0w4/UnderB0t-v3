import makeWASocket, {
  ConnectionState,
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  WASocket,
} from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";
import P from "pino";
import qrcode from "qrcode-terminal";
import path from "path";
import { CommandsHandler } from "./utils/CommandsHandler";

const logger = P({ level: "silent" });

interface BotConfig {
  reconnectInterval: number;
  maxReconnectAttempts: number;
}

// Función para mostrar el QR de forma mejorada
function printQR(qr: string) {
  console.log("\n📱 Escanea este código QR con WhatsApp:\n");
  qrcode.generate(qr, { small: true });
  console.log("\n");
}

// Silenciar errores comunes de libsignal (Bad MAC, MessageCounterError, etc.)
const originalStderr = process.stderr.write;
const suppressedErrors = [
  "Bad MAC",
  "MessageCounterError",
  "Failed to decrypt message",
  "Session error",
];

process.stderr.write = function (chunk: any, encoding?: any, callback?: any): boolean {
  const message = chunk?.toString() || "";
  const shouldSuppress = suppressedErrors.some((error) => message.includes(error));
  
  if (shouldSuppress) {
    return true; // Suprimir el error
  }
  
  return originalStderr.call(process.stderr, chunk, encoding, callback);
};

class WhatsAppBot {
  private socket: WASocket | null = null;
  private reconnectAttempts = 0;
  private reconnectTimeout: NodeJS.Timeout | null = null;
  private commandsHandler: CommandsHandler;

  constructor(private config: BotConfig) {
    // Inicializar el manejador de comandos
    const commandsPath = path.join(__dirname, "commands");
    this.commandsHandler = new CommandsHandler(commandsPath);
  }

  async connect() {
    try {
      console.log("🚀 Iniciando bot de WhatsApp...");

      const { state, saveCreds } = await useMultiFileAuthState("auth_info");
      const { version } = await fetchLatestBaileysVersion();

      this.socket = makeWASocket({
        version,
        logger,
        auth: state,
        browser: ["WhatsApp Bot", "Chrome", "1.0.0"],
      });

      this.socket.ev.on("creds.update", saveCreds);
      this.socket.ev.on("connection.update", this.handleConnectionUpdate.bind(this));
      this.socket.ev.on("messages.upsert", this.handleMessages.bind(this));

      console.log("✅ Bot conectado correctamente");
    } catch (error) {
      console.error("❌ Error al conectar el bot:", error);
      this.scheduleReconnect();
    }
  }

  private handleConnectionUpdate(update: Partial<ConnectionState>) {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      printQR(qr);
    }

    if (connection === "close") {
      const shouldReconnect =
        (lastDisconnect?.error as Boom)?.output?.statusCode !==
        DisconnectReason.loggedOut;

      console.log("⚠️ Conexión cerrada, reason:", lastDisconnect?.error);

      if (shouldReconnect) {
        this.scheduleReconnect();
      } else {
        console.log("❌ Bot fue cerrado de sesión. Elimina la carpeta auth_info e intenta de nuevo.");
      }
    } else if (connection === "open") {
      this.reconnectAttempts = 0;
      console.log("✅ Conexión establecida correctamente");
    }
  }

  private async handleMessages({ messages, type }: any) {
    if (type !== "notify") return;

    for (const msg of messages) {
      const message = msg.message?.conversation || msg.message?.extendedTextMessage?.text;

      if (!message) continue;

      const contact = msg.key.remoteJid;

      if (!contact || !this.socket) continue;

      console.log(`📨 Mensaje recibido de ${contact}: ${message}`);

      // Usar el manejador de comandos
      await this.commandsHandler.handleMessage(this.socket, msg);
    }
  }

  private scheduleReconnect() {
    if (this.reconnectAttempts >= this.config.maxReconnectAttempts) {
      console.log("❌ Número máximo de intentos de reconexión alcanzado");
      return;
    }

    this.reconnectAttempts++;
    const delay = this.config.reconnectInterval * this.reconnectAttempts;

    console.log(
      `🔄 Intentando reconectar en ${delay}ms (Intento ${this.reconnectAttempts}/${this.config.maxReconnectAttempts})`
    );

    this.reconnectTimeout = setTimeout(() => {
      this.connect();
    }, delay);
  }

  disconnect() {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
    }
    if (this.socket) {
      this.socket.end();
    }
    console.log("👋 Bot desconectado");
  }
}

const bot = new WhatsAppBot({
  reconnectInterval: 5000,
  maxReconnectAttempts: 5,
});

bot.connect();

process.on("SIGINT", () => {
  console.log("\n🛑 Deteniendo bot...");
  bot.disconnect();
  process.exit(0);
});

