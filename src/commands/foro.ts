import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!foro",
  description: "Información del foro de Underc0de",
  async execute({ client, message, args }) {
    try {
      const response =
        `*¿Qué es el foro de Underc0de?*

El foro de Underc0de es un lugar de encuentro entre usuarios que tiene más de 14 años, en donde cada miembro ha compartido sus dudas y conocimientos a lo largo de estos años.
Para acceder debes visitar la siguiente URL

https://underc0de.org/foro

Ahí encontraras material de todo tipo. En caso de no encontrar algo, podes usar el buscador.

Por último, podes usar la APP de Underc0de para publicar dudas o responder dudas a otros usuarios, estas preguntas se publicarán automáticamente en el foro.`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !foro:", error);
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

