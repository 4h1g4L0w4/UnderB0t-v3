import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!links",
  description: "Links útiles de la comunidad",
  async execute({ client, message, args }) {
    try {
      const response = `
*Links útiles de la comunidad*  
Como ser miembro de Underc0de: https://underc0de.org/hola  
App de Underc0de Android: https://play.google.com/store/apps/details?id=org.underc0de 
App Underc0de iOS: https://apps.apple.com/uy/app/underc0de/id1591350156?l=es  

*Links útiles:*  
Foro: https://underc0de.org/foro  
Blog: https://blog.underc0de.org  
Fundación: https://fundacion.underc0de.org  

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
Marketing y Diseño UX/UI: https://chat.whatsapp.com/HsFxQULkfqYIcuUY3g2C93
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
Undergirls: https://chat.whatsapp.com/L0HmLa2hIiG4jCphDxxqZQ

Telegram: https://t.me/underc0deoficial  
Telegram Links: https://t.me/underc0denews  

Instagram: https://instagram.com/underc0de  
Twitter: https://twitter.com/underc0de  
Facebook: https://facebook.com/underc0de  
YouTube: https://www.youtube.com/user/under0detv  
Linkedin: https://www.linkedin.com/company/underc0de  
Twitch: https://www.twitch.tv/underc0detv  
Tiktok: https://www.tiktok.com/@underc0de  

Formulario de trabajo 2025: https://forms.gle/mTNZ5aFoHwgEZVXu9 (Para todos aquellos que estan buscando trabajo)  
Discord: https://discord.gg/underc0de  
Slack: https://bit.ly/SlackUnderc0de  
Cursos Gratis en Torrent: https://bit.ly/torrentuc  

Podes ver todos estos links en: https://underc0de.org/comunidad  

YouTube QARMY: https://www.youtube.com/@QARMY-UC/  
Web QARMY: https://qarmy.ar
            `;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !links:", error);
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

