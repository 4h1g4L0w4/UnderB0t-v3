import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!qa",
  description: "Recursos de QA",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Canales y recursos para QAs*

*WhatsApp:*

Comunidad de QA: https://chat.whatsapp.com/HYP9VRihMH8Hk9puOVPBLY
Ofertas laborales de QA: https://chat.whatsapp.com/G3B1F2c1abh7tBQgbAC2Hx
QA Manual: https://chat.whatsapp.com/JAW4oOtncg57ZHdxsIUNKH
Herramientas y recursos: https://chat.whatsapp.com/JhP02my6z6eCMoHQYP8pTK
QA Automation: https://chat.whatsapp.com/COm1qpBTI7b8lt2puGSFzh
Chat General: https://chat.whatsapp.com/HVd9gsK8iPC8zUC9EYTXj9
ISTQB: https://chat.whatsapp.com/FQgWXMABgzl8H7O3SbS2ut

Canal de WhatsApp: https://whatsapp.com/channel/0029VaSzkgD1CYoTmiX8Uv26

*Grupos:*

QA #1: https://chat.whatsapp.com/DGXMcTnYNoZJmqnhBFlV0R
QA #2: https://chat.whatsapp.com/FWqxMBZwpaaCe9KaiIp5wZ
QA #3: https://chat.whatsapp.com/JddftyLxxFYEU9oU7Sx6s4

*Canal de YouTube:* https://www.youtube.com/@QARMY-UC/

*Recursos*

Simuladores ISTQB en español: https://qarmy.ar/simuladores-istqb-gratuitos/
Webs para conseguir trabajo Freelance: https://qarmy.ar/trabajo-freelance/
Webs para practicar testing: https://qarmy.ar/webs-practicas-testing/
HTTP Status Code: https://qarmy.ar/http-status-code/
Foro de QA: https://underc0de.org/foro/qa-(quality-assurance)/

Plantilla para reportar bugs: https://docs.google.com/document/d/1plxwbstIwHdQSuxb2BZ3OsY9M4sBVvCkpckdNEu1Rk8/edit?tab=t.0
Plantilla para reportar bugs en excel: https://docs.google.com/spreadsheets/d/18ZbJfr8EsS9GuMdDFelLSDqS9jml9EnuNhwwh_mrLfM/edit?gid=0#gid=0
Plantilla para crear test cases: https://docs.google.com/spreadsheets/d/1YdEE8waxsp8NS6HwLu_JSO5BoEftlD1KTVQpUk0gZ_A/edit?gid=0#gid=0
Plantilla plan de pruebas: https://docs.google.com/document/d/1Vil5hgx0xtN9X1zIjvuKFg2kWIFq3DZj/edit

*k0lmena, Framework de automation Open Source*
Para automatizar web, mobile, APIs y pruebas de performance

https:k0lmena.com


*Videos de interés:*

¿Cuanto gana un QA?: https://www.youtube.com/watch?v=OeO5XafrX_Q
Roadmap de QA: https://www.youtube.com/watch?v=pwhYBTPz7RQ
Preguntas de entrevista con RRHH: https://www.youtube.com/watch?v=WL1Gu6a4kV4
¿Cómo usar Jira?: https://www.youtube.com/watch?v=tSQ_jDIgb9U
Certificación de Postman: https://www.youtube.com/watch?v=f8i3LPbZ2Sk
¿Cómo conseguir trabajo como Dev o QA?: https://www.youtube.com/watch?v=N8BzZaoFYws
k0lmena: https://www.youtube.com/watch?v=13vDBBiQ17Q
Automatización con IA: https://www.youtube.com/watch?v=0C2ol7yaSyE
¿Cómo y donde estudiar para el ISTQB?: https://www.youtube.com/watch?v=l1r1nwJHMjA
UTEST - Trabajo freelance: https://www.youtube.com/watch?v=SrysxTlqjrw
CVs en formato ATS: https://www.youtube.com/watch?v=YB1EpyFBF5I
¿Cómo trabaja un QA?: https://www.youtube.com/watch?v=sBnZXM-mf2U`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !qa:", error);
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

