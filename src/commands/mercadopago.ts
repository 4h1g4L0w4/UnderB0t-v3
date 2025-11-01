import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!mercadopago",
  description: "Advertencia sobre MercadoPago falso",
  async execute({ client, message, args }) {
    try {
      const response =
        `*En este grupo no tenemos la aplicación de MercadoPago*

El Mercado Pago falso es para estafar gente y acá no queremos estafadores. 
Te pedimos por favor que te retires de nuestra comunidad.`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !mercadopago:", error);
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

