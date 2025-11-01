import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!hola",
  description: "El bot te saluda",
  async execute({ client, message, args }) {
    try {
      const response = `*Hola Humano! Soy Otto, el bot de Underc0de 🤖*`;
      
      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !hola:", error);
      if (message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Ocurrió un error al intentar saludar."
        );
      }
    }
  },
};

export default command;

