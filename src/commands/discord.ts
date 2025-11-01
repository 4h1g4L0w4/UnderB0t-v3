import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!discord",
  description: "Servidor de Discord de Underc0de",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Canal de Discord de Underc0de*

Pueden usar libremente nuestro servidor de Discord con todas las mejoras!

https://discord.gg/underc0de`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !discord:", error);
      if (message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Ocurrió un error al intentar enviar los links."
        );
      }
    }
  },
};

export default command;

