import { getConfig } from '@/lib/config'
import { TelegramMessengerService } from "."

let tgService: null | TelegramMessengerService = null

export function getTgService() {
  if (!tgService) {
    const config = getConfig()
    tgService = new TelegramMessengerService(config.TG_BOT_TOKEN, config.TG_CHAT_ID)
  }

  return tgService
}
