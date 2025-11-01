import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!report",
  description: "Notifica a los administradores del grupo",
  async execute({ client, message, args }) {
    try {
      // Verificar si es un grupo
      if (!message.isGroup || !message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Este comando solo puede ser usado en grupos."
        );
        return;
      }

      // Número del administrador (configurable)
      const adminNumber = "54988888888"; // Formato sin @c.us

      const response = `Tu reporte ha sido enviado a los administradores.`;

      // Enviar mensaje con mención al admin
      if (message.remoteJid) {
        await client.sendMessage(message.remoteJid, {
          text: response,
          mentions: [`${adminNumber}@s.whatsapp.net`],
        });
        console.log(`✅ Reporte enviado por ${message.key.participant}`);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !report:", error);
      if (message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Ocurrió un error al intentar enviar el reporte."
        );
      }
    }
  },
};

export default command;

