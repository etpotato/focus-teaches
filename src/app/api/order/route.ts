import { getTgService } from "@/lib/messenger"
import { orderSchema } from "@/dto/order.dto"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const formDataObject = Object.fromEntries(formData.entries())
    const order = await orderSchema.parseAsync(formDataObject)
    console.log(order);

    getTgService().send(`

<b>new order:</b>
name: ${order.name}
phone: ${order.phone}
    `)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 })
  }
}
