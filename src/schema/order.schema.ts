import { z } from 'zod'

export const orderSchema = z.object({
  name: z.string().trim().min(1, { message: "required" }),
  phone: z.string().trim().min(1, { message: "required" })
})

export type OrderSchema = z.infer<typeof orderSchema>
