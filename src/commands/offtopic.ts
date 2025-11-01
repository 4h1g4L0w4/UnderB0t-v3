import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!offtopic",
  description: "Te manda al offtopic para no desvirtuar el grupo",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Para hablar boludeces, mandar stickers, memes o cosas no relacionadas a la informática, te pedimos que uses el grupo de Off Topic*

https://chat.whatsapp.com/Hxpf0DrQezoCJegOVFdBe3`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !offtopic:", error);
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

