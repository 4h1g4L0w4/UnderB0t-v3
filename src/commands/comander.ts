import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!comander",
  description: "Lista todos los comandos disponibles",
  aliases: ["!comandos"],
  async execute({ client, message, args }) {
    try {
      // Usar el mismo contenido que help
      const response = `*Comandos disponibles:*
      
Para ver la lista completa, usa *!help*`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !comander:", error);
      if (message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Ocurrió un error al intentar listar comandos."
        );
      }
    }
  },
};

export default command;

