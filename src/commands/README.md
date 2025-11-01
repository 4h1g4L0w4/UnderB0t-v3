# 📁 Comandos

Esta carpeta contiene todos los comandos del bot. Cada comando es un módulo independiente con su propia lógica.

## 📋 Estructura de un Comando

Cada comando debe exportar un objeto con la siguiente estructura:

```typescript
import { Command } from "../types/Command";
import { MessageHelper } from "../utils/MessageHelper";

const command: Command = {
  name: "!micomando",              // Nombre del comando (obligatorio)
  description: "Descripción del comando",  // Descripción (obligatorio)
  aliases: ["!alias1", "!alias2"], // Aliases opcionales
  async execute({ client, message, args }) {
    // Tu código aquí
    const response = "Respuesta del comando";
    await MessageHelper.reply(client, message.remoteJid, response);
  },
};

export default command;
```

## 🎯 Parámetros del Contexto

El método `execute` recibe un objeto `CommandContext` con:

- `client`: Instancia de `WASocket` (Baileys) para interactuar con WhatsApp
- `message`: Objeto con información del mensaje recibido
  - `key`: Clave única del mensaje
  - `message`: Contenido del mensaje de Baileys
  - `body`: Texto completo del mensaje
  - `remoteJid`: ID del chat (usuario o grupo)
  - `isGroup`: Boolean indicando si es un grupo
- `args`: Array de argumentos después del comando

## 🔧 Utilidades

### MessageHelper

Clase helper para enviar mensajes fácilmente:

```typescript
import { MessageHelper } from "../utils/MessageHelper";

// Enviar un mensaje
await MessageHelper.reply(client, message.remoteJid, "¡Hola!");

// Reaccionar a un mensaje
await MessageHelper.react(client, message.key, "👍");
```

## 📝 Ejemplos

### Comando Simple

```typescript
const command: Command = {
  name: "!hola",
  description: "Saluda al usuario",
  async execute({ client, message, args }) {
    await MessageHelper.reply(client, message.remoteJid, "¡Hola! 👋");
  },
};
```

### Comando con Argumentos

```typescript
const command: Command = {
  name: "!saludo",
  description: "Saluda a un usuario específico",
  async execute({ client, message, args }) {
    const nombre = args.join(" ") || "usuario";
    await MessageHelper.reply(
      client, 
      message.remoteJid, 
      `¡Hola ${nombre}! 👋`
    );
  },
};
```

### Comando Solo para Grupos

```typescript
const command: Command = {
  name: "!grupo",
  description: "Comando solo para grupos",
  async execute({ client, message, args }) {
    if (!message.isGroup) {
      await MessageHelper.reply(
        client, 
        message.remoteJid, 
        "Este comando solo funciona en grupos."
      );
      return;
    }
    
    await MessageHelper.reply(client, message.remoteJid, "¡Funciona!");
  },
};
```

### Comando con Aliases

```typescript
const command: Command = {
  name: "!ping",
  description: "Prueba de conectividad",
  aliases: ["!p", "!latencia"],
  async execute({ client, message, args }) {
    await MessageHelper.reply(client, message.remoteJid, "🏓 pong");
  },
};
```

## 🚀 Cómo Agregar un Nuevo Comando

1. Crea un archivo `.ts` en la carpeta `src/commands/`
2. Copia el template básico
3. Implementa tu lógica
4. El comando se cargará automáticamente al iniciar el bot

## ⚠️ Notas Importantes

- Los comandos deben empezar con `!`
- Maneja errores con try-catch
- Siempre verifica que `message.remoteJid` exista antes de responder
- Usa `MessageHelper` en lugar de `client.sendMessage` directamente
- Exporta el comando como `default`

