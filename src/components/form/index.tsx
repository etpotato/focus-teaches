"use client"

import { ResponseDto } from '@/dto/order.dto'
import { Button } from '../../components'
import { ChangeEvent, FormEvent, useState } from "react"

const MASK = '+7 (___) ___-__-__'
const MASK_PLUG = '_'
const defaultPhone = MASK.slice(0, 2)

export const Form = () => {
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState(defaultPhone)
  const [name, setName] = useState('')

  function updatePhone(evt: ChangeEvent<HTMLInputElement>) {
    const digits = evt.target.value.match(/\d/g)?.slice(1)

    if (!digits?.length) {
      setPhone(defaultPhone)
      return
    }

    let lastIndex = 0
    let digitIndex = 0

    const result = MASK.replaceAll(MASK_PLUG, (plug, index) => {
      if (digits[digitIndex]) {
        lastIndex = index + 1
        return digits[digitIndex++]
      }

      return plug
    })

    setPhone(result.slice(0, lastIndex))
  }

  function updateName(evt: ChangeEvent<HTMLInputElement>) {
    setName(evt.target.value)
  }

  async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    if (phone.length < MASK.length || !name.length) {
      return
    }

    setLoading(true)

    try {
      const formData = new FormData(evt.currentTarget)
      const response = await fetch('/api/order', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('not ok')
      }

      const data: ResponseDto = await response.json()

      if (!data.success) {
        throw new Error('no success')
      }

      setPhone(defaultPhone)
      setName('')
    } catch {
    }
    setLoading(false)
  }

  return (
    <form action="/api/order" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
      <input type="text" name="phone" value={phone} onChange={updatePhone} required/>
      <input type="text" name="name" value={name} onChange={updateName} />
      <Button tag="button" type="submit" disabled={loading}>Записаться на занятие</Button>
    </form>
  )
}
