import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!estoyloco",
  description: "Expresión de locura",
  async execute({ client, message, args }) {
    try {
      const response =
        `*YO TAMBIÉNNNNNN QLIAAAA*

NDEAHHHHHHHHHH!!!
sdfkjhsdkjfhdkfhseuidhsduifhdsuif
ladjkashdjkashdkjashdkjash`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !estoyloco:", error);
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

