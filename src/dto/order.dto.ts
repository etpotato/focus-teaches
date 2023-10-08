import { OrderSchema } from "@/schema/order.schema";
import { ZodIssue } from "zod";

export type CreateOrderDto = OrderSchema;

export type ResponseDto = {
  success: boolean,
  error?: { issues: ZodIssue[] },
}
