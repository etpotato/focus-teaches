import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().trim().min(1, { message: "required" }),
  phone: z.string().trim().min(1, { message: "required" })
})

export type CreateOrderDto = z.infer<typeof orderSchema>;

export type ResponseDto = {
  success: boolean,
}
