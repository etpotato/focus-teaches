import TelegramBot from 'node-telegram-bot-api'

import { MessengerService } from ".";

export class TelegramMessengerService implements MessengerService {
  private alive: boolean;
  private tgBot: TelegramBot;

  constructor(
    private readonly token: string,
    private readonly chatId: string,
  ) {}

  async disconnect() {
    try {
      await this.tgBot.close()
    } catch (err) {
      console.error('Telegram bot disconnect error', err)
    }
  }

  async connect() {
    try {
      this.tgBot = new TelegramBot(this.token)
    } catch (err) {
      console.error('Telegram bot initialization error', err)
      throw err
    }
  }

  async send(msg: string) {
    this.tgBot.sendMessage(this.chatId, msg)
  }

  isAlive(): boolean {
    return this.alive;
  }
}
