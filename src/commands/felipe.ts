import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!felipe",
  description: "El que mueve los hombritos",
  async execute({ client, message, args }) {
    try {
      const response =
        `Mira como mueve los hombritos, mira como mueve los hombritos,
y como y como, y como se llama usted?

*FE-LI-PE*`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !felipe:", error);
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

