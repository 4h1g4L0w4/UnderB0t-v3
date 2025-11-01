import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!juntada",
  description: "Detalles de la próxima juntada",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Juntada de Underc0de con CERVEZA GRATIS!*

Lugar: La Cañada
Día y hora: Domingo 15 de Junio - 19:30hs

Revisa los detalles y confirma tu asistencia: 
https://calendar.app.google/WogJSwzVGMea7P7VA

No te cuelgues! Te esperamos!!!`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !juntada:", error);
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

