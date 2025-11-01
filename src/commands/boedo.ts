import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!boedo",
  description: "Información del barrio Gran Boedo",
  async execute({ client, message, args }) {
    try {
      const response =
        `*Información importante del Barrio*

- *Administración:*
    Pablo Vila: 2613 04-3543

- *Desinfecciones y fumigación:* 
    Sanital: 2616 54-0073
    Saneco: 2616 92-9400
    Upsolutions: 2613538073

- *Jardinería:*
    Fernando Simo: 2615 99-6748
    Hernan: 2615 77-7238
    Oscar Rodriguez: 2612 16-9516
    Gustavo: 2615 11-4322
    Roberto Grilli: 2615 15-2141
    Pato Copparoni: 2612160638

- *Vendedores:* 
    Francisca: 2612 77-5841 (Huevos)
    Florencia: 2612 18-1533 (Huevos)
    Memi Moyano: 2613343335 (Aceite de Oliva)

- *Estudio Roz:* 261 276-8421

- *Internet:*
    Latencia 0: 2612080504

- *Limpieza de vidrios:*
    Mendoclean: 2617 72-4475

- *Bombas y calderas:*
    Ariel Martinez: 2612 09-6112 (Calderas)
    Daniel Gallardo: 2613 89-5372 (Bombas)

- *Niñeras:*
    Emilia: 2612 71-5066
    Paula: 2612 71-4711
    Luli Torres: 2613845246
    Belen Loza: 2617 15-8708

- *Limpieza Vehicular:*
    Benicio Daccurzio: 2614 68-6273

- *Aire Acondicionado:*
    Jorge Abel: 2615723628
    Diego Bellene: 2612 18-7487

- *Masajes a domicilio:*
    Silvia: 2615 16-7520

- *Kinesiologo a domicilio:*
    Daniel Illanes: 2615 73-8124
    Beatriz Massicci: 2615696913

- *Electricista:*
    Roman: 2613 64-9095
    Santos: 2613 43-8992
    David Silva: 2612 40-3769

- *Inyectable a Domicilio:*
    Nestor: 2616 56-8938

- *Sodero:*
    Tommo: 2616944035

- *Veterinario a Domicilio:*
    Josefina: 2617 54-4062
    Enzo Fornari: 2616 80-0401
    Eli: 2613 72-6364

- *Cierres Perimetrales:*
    Zebra Cartel Alba: 2613 36-6734
    Cercar Cierres: 2612 18-5860
    Manuel Monifas: 2615 05-8217
    Ever: 2616 10-2136

- *Metalurgico*
    Daniel Fontana: 2615 91-1392

- *Amoblamientos*
    Muebles de interior: 2614 18-4642
    Cocinas/Placares: 2613028796
    Cortinas Blackout: 2615 35-7694 (Alejandra Jara)
    De Cierra Cortinas: 2616 21-0000 (Fernanda)
    Cortinas Goren: 2615 05-5210 (Marcelo)
    Cortinas Real Estampa: 2614 72-9058 (Sole Genoud)
    Cortinas: 2614 68-4464 (Victor)
    Cortinas: 2615 12-4403 (Paula Pometti)

- *Lubricentro*
    Prolube: 2615 94-9220 (Boedo Camp)

- *Profesores / Maestros particulares*
    Carolina (Matemáticas): 2616391744
    Emilia (Inglés): 2612715066`;

      if (message.remoteJid) {
        await MessageHelper.reply(client, message.remoteJid, response);
      }
    } catch (error) {
      console.error("❌ Error ejecutando !boedo:", error);
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

