import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!status",
  description: "Solicitar status para daily",
  async execute({ client, message, args }) {
    try {
      const response = `*PASAME EL STATUS QUE EMPIEZA LA DAILY!!!*`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !status:", error);
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

