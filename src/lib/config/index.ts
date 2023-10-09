import { EnvSchema, envSchema } from "@/schema/env.schema";

let config: EnvSchema | null = null

export function getConfig() {
  if (!config) {
    config = envSchema.parse(process.env)
    console.log('Env schema is parsed', config)
  }

  return config
}

