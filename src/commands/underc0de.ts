import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!underc0de",
  description: "¿Qué es Underc0de?",
  async execute({ client, message, args }) {
    try {
      const response =
        `*¿Qué es Underc0de?*

Underc0de es una comunidad que nuclea a más de 106mil informáticos de todo el mundo. 
Compartimos nuestro conocimiento, ayudamos a que nuestros miembros se capaciten y colaboramos con la inserción laboral.

Esperamos que te sientas a gusto en esta gran familia!`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !underc0de:", error);
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

