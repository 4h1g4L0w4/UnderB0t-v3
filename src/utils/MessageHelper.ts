import { WASocket, proto } from "@whiskeysockets/baileys";

export class MessageHelper {
  static async reply(client: WASocket, remoteJid: string | undefined, text: string): Promise<void> {
    if (!remoteJid) {
      console.warn("⚠️ remoteJid no disponible para responder");
      return;
    }

    try {
      await client.sendMessage(remoteJid, {
        text: text,
      });
      console.log(`✅ Mensaje enviado a ${remoteJid}`);
    } catch (error) {
      console.error("❌ Error enviando mensaje:", error);
    }
  }

  static async react(client: WASocket, key: proto.IMessageKey, emoji: string): Promise<void> {
    if (!key.remoteJid || !key.id) return;

    try {
      await client.sendMessage(key.remoteJid, {
        react: {
          text: emoji,
          key: key,
        },
      });
    } catch (error) {
      console.error("❌ Error enviando reacción:", error);
    }
  }
}

