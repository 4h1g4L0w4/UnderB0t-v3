import fs from "fs";
import path from "path";
import { Command, Message, CommandContext } from "../types/Command";
import { WASocket } from "@whiskeysockets/baileys";

export class CommandsHandler {
  private commands: Map<string, Command> = new Map();
  private commandsDir: string;

  constructor(commandsDir: string) {
    this.commandsDir = commandsDir;
    this.loadCommands();
  }

  private loadCommands(): void {
    try {
      const files = fs.readdirSync(this.commandsDir);
      
      for (const file of files) {
        // Solo cargar archivos .js (compilados) o .ts con ts-node
        const ext = path.extname(file);
        if (ext === ".js" || (ext === ".ts" && process.env.NODE_ENV !== "production")) {
          const filePath = path.join(this.commandsDir, file);
          
          try {
            // Importar el comando
            delete require.cache[require.resolve(filePath)];
            const commandModule = require(filePath);
            const command: Command = commandModule.default || commandModule;

            if (command && typeof command === "object" && command.name && command.execute) {
              this.commands.set(command.name.toLowerCase(), command);

              // Registrar aliases si existen
              if (command.aliases && Array.isArray(command.aliases)) {
                command.aliases.forEach((alias: string) => {
                  this.commands.set(alias.toLowerCase(), command);
                });
              }

              console.log(`✅ Comando cargado: ${command.name}`);
            } else {
              console.warn(`⚠️ Comando inválido en ${file}: falta name o execute`);
            }
          } catch (error) {
            console.error(`❌ Error cargando comando ${file}:`, error);
          }
        }
      }

      console.log(`📦 Total de comandos cargados: ${this.commands.size}`);
    } catch (error) {
      console.error("❌ Error cargando comandos:", error);
    }
  }

  async handleMessage(client: WASocket, message: any): Promise<void> {
    try {
      const messageText = message.message?.conversation || 
                         message.message?.extendedTextMessage?.text;

      if (!messageText) return;

      const args = messageText.trim().split(/\s+/);
      const commandName = args.shift()?.toLowerCase();

      if (!commandName || !commandName.startsWith("!")) return;

      console.log(`🔍 Buscando comando: ${commandName}`);

      const command = this.commands.get(commandName);

      if (command) {
        console.log(`✅ Ejecutando comando: ${command.name}`);
        const messageWrapper: Message = {
          key: message.key,
          message: message.message,
          body: messageText,
          remoteJid: message.key.remoteJid,
          isGroup: message.key.remoteJid?.includes("@g.us") || false,
        };

        const context: CommandContext = {
          client,
          message: messageWrapper,
          args,
        };

        await command.execute(context);
      } else {
        console.log(`⚠️ Comando no encontrado: ${commandName}`);
      }
    } catch (error) {
      console.error("❌ Error en handleMessage:", error);
    }
  }

  getCommands(): Map<string, Command> {
    return this.commands;
  }

  reloadCommands(): void {
    this.commands.clear();
    this.loadCommands();
  }
}

