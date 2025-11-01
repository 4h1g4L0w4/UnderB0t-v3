import { WASocket } from "@whiskeysockets/baileys";
import { proto } from "@whiskeysockets/baileys";

export interface Message {
  key: proto.IMessageKey;
  message?: proto.IMessage;
  body?: string;
  remoteJid?: string;
  isGroup?: boolean;
}

export interface CommandContext {
  client: WASocket;
  message: Message;
  args: string[];
}

export interface Command {
  name: string;
  description: string;
  aliases?: string[];
  execute: (context: CommandContext) => Promise<void>;
}

