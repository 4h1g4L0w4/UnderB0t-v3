import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!ping",
  description: "Responde con pong (prueba de conectividad)",
  aliases: ["!p"],
  async execute({ client, message, args }) {
    try {
      const response = `🏓 pong`;
      
      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !ping:", error);
      if (message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Ocurrió un error al intentar hacer ping."
        );
      }
    }
  },
};

export default command;

