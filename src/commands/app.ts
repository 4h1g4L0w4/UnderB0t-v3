import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!app",
  description: "Links para bajar la app de Underc0de",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Descargá nuestra APP y obtené tu credencial como miembro de Underc0de:*

Android: https://play.google.com/store/apps/details?id=org.underc0de
iPhone: https://apps.apple.com/uy/app/underc0de/id1591350156?l=es

Una vez registrado, la aplicación armará tu credencial con tus datos y con ella podrás acceder a todos los beneficios de la comunidad.

Recordá usar el foro para incrementar tu actividad y junto a ello, los beneficios!`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !app:", error);
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

