import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!dc",
  description: "Invitación a Discord",
  async execute({ client, message, args }) {
    try {
      const response = `*ENTRA AL DISCORDDDDD QLIAAAA!*
La concha de tu hermana. (Con todo respeto)`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !dc:", error);
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

