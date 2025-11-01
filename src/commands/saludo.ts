import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!saludo",
  description: "Saludo especial",
  async execute({ client, message, args }) {
    try {
      const response =
        `*NDEAAAAAAAAAAAHHHHH!!!*

Como tan muchacho. 
Yo lo veo a utede muy bien.

Buen día manga de petes!`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !saludo:", error);
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

