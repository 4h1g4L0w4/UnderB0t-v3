import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!undercode",
  description: "Corrección de escritura",
  async execute({ client, message, args }) {
    try {
      const response =
        `Te pedimos por favor que escribas bien el nombre de nuestra comunidad.
Underc0de se escribe con *CERO*.

Te invitamos a visitar el siguiente link: https://undercode.com.ar`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !undercode:", error);
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

