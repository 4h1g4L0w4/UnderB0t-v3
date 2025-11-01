import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!remeras",
  description: "Información sobre las remeras de Underc0de",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Remeras de Underc0de 👕*

Si sos de Mendoza, podés pedir las remeras en 3er Mundo (Hay descuento por ser de Underc0de)

Galería Caracol, Local 92
WhatsApp: 2613 47-4158

En caso de ser de otra provincia/país, te dejamos el diseño del pulpo.
Con esto podrás ir a cualquier tienda de estampados y hacer la tuya en tu ciudad.

https://drive.google.com/drive/u/3/folders/16rpxsWQU0PJyG5ZrZVLiczs6xiEWEnYS`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !remeras:", error);
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

