import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!canales",
  description: "Canales de WhatsApp de Underc0de",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Canales informativos de WhatsApp*

Canal de Underc0de (Noticias informáticas, herramientas, y mucho más)
https://whatsapp.com/channel/0029VaAvwLOBA1esBEjEee1Q

Posiciones IT (Búsqueda de Empleo)
https://whatsapp.com/channel/0029VaC2kUSBVJl5gtNSrl3A

QARMY (Canal de QA)
https://whatsapp.com/channel/0029VaSzkgD1CYoTmiX8Uv26

Noticias informáticas
https://whatsapp.com/channel/0029VbAhxsm0LKZBEkjPy126`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !canales:", error);
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

