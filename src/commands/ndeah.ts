import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!ndeah",
  description: "Expresión de entusiasmo",
  async execute({ client, message, args }) {
    try {
      const response =
        `*NDEAAAAAAAAAAAHHHHH!!!*

Sale Discordddd QLIAAAAAA!
Nere Nere Nereaaaaaaa
Rica la colo

https://discord.gg/underc0de`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !ndeah:", error);
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

