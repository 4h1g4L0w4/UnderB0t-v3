import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!info",
  description: "Muestra información sobre el bot",
  async execute({ client, message, args }) {
    try {
      const response =
        `*¿Para qué sirven los grupos de Underc0de?*

Los grupos de WhatsApp reúnen a amantes de la informática de todo el mundo y ofrecen un espacio para conversar sobre temas del sector. 

Contamos con varios grupos, cada uno enfocado en diferentes áreas, pero en cualquiera de ellos tienes la libertad de hablar sobre lo que quieras, siempre que esté relacionado con informática.

Para ver los grupos disponibles, ejecutá el comando *!grupos*`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !info:", error);
      if (message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Ocurrió un error al intentar mostrar la información."
        );
      }
    }
  },
};

export default command;

