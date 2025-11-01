import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!reglas",
  description: "Reglas de la comunidad",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Reglas de la comunidad*

    - NO está permitido el SPAM (Publicidad engañosa, links de otras comunidades, etc).
    - NO hablar de religión ni política.
    - NO mandar contenido XXX ni gore.
    - Ser respetuoso con el resto de los miembros de la comunidad.
    - Problemas generados fuera de la comunidad, no se trasladaran a Underc0de.
    - NO mandar malware
    - No comercializar dentro de los grupos, excepto en el de compra/venta.
    - Utilizar la App para poner dudas que puedan ayudar a más miembros.
    - No vender ni pedir la aplicación de MercadoPago y BNA falsas. (Nada de estafas)

    En caso de un insulto o falto de respeto a cualquier miembro de la comunidad se tomarán medidas dependiendo de cada caso.`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !reglas:", error);
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

