import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!todos",
  description: "Etiqueta a todos los participantes (solo admines)",
  async execute({ client, message, args }) {
    try {
      // Verificar si es un grupo
      if (!message.isGroup || !message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Este comando solo se puede usar en grupos."
        );
        return;
      }

      // TODO: Agregar verificación de permisos de admin
      // Por ahora cualquier usuario puede usarlo

      // Obtener metadata del grupo
      const metadata = await client.groupMetadata(message.remoteJid);
      const participants = metadata.participants.map((p) => p.id);

      // Mencionar en lotes de 20 para no exceder límites
      const chunkSize = 20;
      for (let i = 0; i < participants.length; i += chunkSize) {
        const chunk = participants.slice(i, i + chunkSize);
        await client.sendMessage(message.remoteJid, {
          text: "@todos",
          mentions: chunk,
        });
        console.log(`Menciones enviadas: ${i + 1}-${Math.min(i + chunkSize, participants.length)}`);
      }
    } catch (error) {
      console.error("❌ Error en comando !todos:", error);
      if (message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Ocurrió un error al intentar mencionar a todos."
        );
      }
    }
  },
};

export default command;

