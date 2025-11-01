import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!donar",
  description: "Colaborá con Underc0de",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Colaborá para que Underc0de siga creciendo!*

Tenemos una membresía PRO, en donde además de ayudar a Underc0de, tendrás muchos beneficios

https://fundacion.underc0de.org/donaciones/`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !donar:", error);
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

