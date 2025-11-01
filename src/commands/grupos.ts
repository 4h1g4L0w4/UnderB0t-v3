import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!grupos",
  description: "Grupos de WhatsApp de Underc0de",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Nuestros grupos y canales de WhatsApp*

*Canal de WhatsApp con todas la novedades (becas, cursos, etc):*  
https://whatsapp.com/channel/0029VaAvwLOBA1esBEjEee1Q

*Canal de posiciones IT:* 
https://whatsapp.com/channel/0029VaC2kUSBVJl5gtNSrl3A

*Canal de Noticias informáticas:*
https://whatsapp.com/channel/0029VbAhxsm0LKZBEkjPy126

*Grupos de WhatsApp*
Underc0de Oficial: https://chat.whatsapp.com/HjMOBIo2QBiEKhQAFYF75L
Underc0de Oficial #2: https://chat.whatsapp.com/DYVHk6t5eGA0mAIOZDrPox
Criptos - USD - Inversiones: https://chat.whatsapp.com/HGPG6bmDWUYG0dpVC1joEU
Criptos - USD - Inversiones #2: https://chat.whatsapp.com/Iu4TW64atLILU6qH2bc3Oi
English: https://chat.whatsapp.com/FpKVegSRpfs5VG1PPUqKa2
QA: https://chat.whatsapp.com/DGXMcTnYNoZJmqnhBFlV0R
QA #2: https://chat.whatsapp.com/FWqxMBZwpaaCe9KaiIp5wZ
QA #3: https://chat.whatsapp.com/JddftyLxxFYEU9oU7Sx6s4
Marketing y Diseño UX/UI: https://chat.whatsapp.com/HsFxQULkfqYIcuY3g2C93
Grupo de Emprendedores: https://chat.whatsapp.com/LaecGOFliWSKWEvOtCQRY7
Programación #1: https://chat.whatsapp.com/KXMlQZ23WO89k7ACOUakrV
Programación #2: https://chat.whatsapp.com/CkKKBc7l7t94yz7AGduVVA
Gaming: https://chat.whatsapp.com/KonpqiMwnW40tipWrrxn5n
OffTopic: https://chat.whatsapp.com/Hxpf0DrQezoCJegOVFdBe3
Underc0aching: https://chat.whatsapp.com/CaeqEJkgCOV9lc6cWb1opL
Underc0de Argentina: https://chat.whatsapp.com/GL4m0fer6PaKCHH1GGgNlG
Underc0de Mexico: https://chat.whatsapp.com/DmSR69N8kafEbYottgLbVL
Underc0de Europa: https://chat.whatsapp.com/CpaGHdCi44QBVy7Bo1IP82
Underc0de Mendoza #1: https://chat.whatsapp.com/KTU7jGMLBBB7jRFrr4jvmR
Underc0de Mendoza #2: https://chat.whatsapp.com/BZdc70RseYgHbS5drezv0J
Underc0de Mendoza #3: https://chat.whatsapp.com/GJYpqtqeyTT4nDcMDVAX6m
Underc0de San Rafael (MZA): https://chat.whatsapp.com/LQsWI0Uu1HWIjoXsxhZ2fQ
Underc0de Tucumán: https://chat.whatsapp.com/FJ183bvg9yWIPOLrPgmEJG
Compra/Venta Mendoza: https://chat.whatsapp.com/HL56ND0W44wIsUQByrvzHp
Underc0de Links: https://chat.whatsapp.com/FAS5Pd5mpPVF9dtrIExVVX
Salidas recreativas Mendoza: https://chat.whatsapp.com/EhqPKz1DKgzBCNRQzj7CDL
Hacking, Seguridad y Pentesting: https://chat.whatsapp.com/H1Bb9UZz6f21nDNeEDzaI9
IA y Análisis de Datos: https://chat.whatsapp.com/GHfYhT97e1z0DnnQGCTAba
Software, Hardware y Reparaciones: https://chat.whatsapp.com/FAE4f9oKP442Z5NlHHPoVk
Telecomunicaciones: https://chat.whatsapp.com/DqcR18IsDXEIpo1RhB5HCn
Underc0de Docentes: https://chat.whatsapp.com/FNc78K76qtW4BrBMLin3ZQ
Undergirls: https://chat.whatsapp.com/L0HmLa2hIiG4jCphDxxqZQ`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !grupos:", error);
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

