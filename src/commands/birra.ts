import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!birra",
  description: "Te sirve una birra",
  async execute({ client, message, args }) {
    try {
      const response = `*Marcha esa birra fria para el caballero*`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !birra:", error);
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

