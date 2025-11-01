import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!help",
  description: "Muestra los comandos disponibles",
  aliases: ["!ayuda", "!comandos"],
  async execute({ client, message, args }) {
    try {
      const response =
        `*Comandos disponibles:*

📋 *Información y Ayuda*
- !help - Muestra los comandos disponibles
- !info - Información sobre los grupos de WhatsApp
- !underc0de - ¿Qué es Underc0de?
- !bienvenido - Mensaje de bienvenida

🔗 *Links y Recursos*
- !links - Links útiles de la comunidad
- !grupos - Grupos de WhatsApp
- !canales - Canales informativos
- !discord - Servidor de Discord
- !app - Links para bajar la app
- !torrent - Links de cursos en torrent

🎓 *Especiales*
- !qa - Recursos de QA
- !pro - Cómo ser miembro PRO
- !cowork - Información del cowork virtual

📢 *Gestion*
- !report - Notifica a administradores
- !juntada - Detalles de la próxima juntada
- !donar - Colaborá con Underc0de
- !reglas - Reglas de la comunidad
- !reglascv - Reglas del grupo compra/venta

🎉 *Divertidos*
- !cerveza - Te sirve una birra
- !fernet - Te da un fernet
- !hola - El bot te saluda
- !offtopic - Te manda al offtopic

*¡Navega libremente entre los comandos!*`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !help:", error);
      if (message.remoteJid) {
        await MessageHelper.reply(
          client,
          message.remoteJid,
          "Ocurrió un error al intentar mostrar la ayuda."
        );
      }
    }
  },
};

export default command;

