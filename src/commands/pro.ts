import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!pro",
  description: "Cómo ser miembro PRO",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Volvete miembro PRO!*

Colaborá con nuestra comunidad y accedé a muy buenos beneficios de nuestra comunidad

Valor: $3000 (menos que una pinta de cerveza)

https://fundacion.underc0de.org/donaciones/`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !pro:", error);
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

