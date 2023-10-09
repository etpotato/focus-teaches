import TelegramBot from 'node-telegram-bot-api'

import { MessengerService } from ".";

export class TelegramMessengerService implements MessengerService {
  private tgBot: TelegramBot;

  constructor(
    private readonly token: string,
    private readonly chatId: string,
  ) {
    try {
      this.tgBot = new TelegramBot(this.token, { polling: true })
    } catch (err) {
      console.error('Telegram bot initialization error', err)
      throw err
    }
  }

  public async send(msg: string) {
    this.tgBot.sendMessage(this.chatId, msg, { parse_mode: 'HTML' })
  }
}
