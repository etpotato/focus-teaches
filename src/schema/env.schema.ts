import { z } from 'zod'

export const envSchema = z.object({
  TG_BOT_TOKEN: z.string().trim().min(1, { message: "required" }),
  TG_CHAT_ID: z.string().trim().min(1, { message: "required" })
})

export type EnvSchema = z.infer<typeof envSchema>
