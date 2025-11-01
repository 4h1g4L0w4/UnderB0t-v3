import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!futbol",
  description: "Transmisiones de fútbol",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Estamos transmitiendo el partido!*

Miralo en vivo por Discord:

https://discord.gg/underc0de`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !futbol:", error);
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

