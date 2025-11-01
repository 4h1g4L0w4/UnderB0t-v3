import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!reglascv",
  description: "Reglas del grupo compra/venta (Mendoza)",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Reglas del grupo Compra/Venta*

Para publicar una venta en el grupo, es necesario agregar:

*Foto (Máximo 4 fotos)
*Descripción
*Precio

*IMPORTANTE*

- Underc0de no se responsabiliza por las compras/ventas realizadas a través de este grupo.

- No publicar lo mismo todos los días, dejar pasar 2 o 3 días antes de republicar el mismo producto.

- El grupo es solo para publicar compra/ventas informáticas: computadoras, teléfonos, tablets, insumos, periféricos, y relacionados (placas, mouse, teclados, etc) Además de sillas y escritorios para PC.

En caso de mandar memes, stickers, hablar temas no relacionados a ventas o utilizar el grupo como off topic, serán eliminados. Recuerden siempre hacer preguntar por privado al vendedor/comprador para evitar llenar el grupo con mensajes. 

Si les parece caro un producto, pueden optar por no comprarlo, pero no critiquen ni bardeen en el grupo, cada uno puede ponerle el precio que quiera a sus cosas. En caso de no saber a que precio vender un producto, pueden preguntar o pedir recomendaciones en cualquiera de los otros grupos de Underc0de

Una vez que se llene este grupo, eliminaremos a todos aquellos que no sean parte de la comunidad de Underc0de. Te recomendamos unirte!

*UNICAMENTE PUBLICAR PRODUCTOS QUE QUIERAN COMPRAR O VENDER. PARA PREGUNTAS USAR LOS OTROS GRUPOS*`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !reglascv:", error);
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

