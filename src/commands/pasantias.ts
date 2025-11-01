import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!pasantias",
  description: "Información sobre pasantías",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Pasantías en Underc0de*

Si eres estudiante de una escuela secundaria técnica, instituto terciario o universidad y necesitas realizar pasantías,
prácticas profesionales o prácticas solidarias, te invitamos a unirte a nuestra fundación. 
Ofrecemos una oportunidad única para que desarrolles tus habilidades y adquieras experiencia práctica en un entorno real de trabajo.

Para comenzar, solo necesitas enviar el permiso correspondiente emitido por tu institución educativa al siguiente correo electrónico:

*pasantias@underc0de.org*

Asegúrate de que toda la documentación esté en orden para que podamos procesar tu solicitud sin inconvenientes.

Más información: https://fundacion.underc0de.org/pasantias-practicas-solidarias`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !pasantias:", error);
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

