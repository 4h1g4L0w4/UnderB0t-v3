import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!cowork",
  description: "Información del cowork virtual",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Todos los Jueves hacemos cowork por nuestro servidor de Discord*

Sumate y pasá un rato divertido entre amigos

https://discord.gg/underc0de`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !cowork:", error);
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

