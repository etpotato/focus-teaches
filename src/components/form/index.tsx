"use client"

import { ResponseDto } from '@/dto/order.dto'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { Input } from '../input'
import { Button } from '../button'

const MASK = '+7 (___) ___-__-__'
const MASK_PLUG = '_'
const REGEXP = /\d/g

// TODO: allow one extra character for phone number
export const Form = () => {
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState(MASK)
  const [name, setName] = useState('')
  const phoneRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const index = phone.split('').findLastIndex((char) => REGEXP.test(char)) + 1
    phoneRef.current?.setSelectionRange(index, index)
  }, [phoneRef, phone])

  function updatePhone(evt: ChangeEvent<HTMLInputElement>) {
    const digits = evt.target.value.match(REGEXP)?.slice(1)

    if (!digits?.length) {
      setPhone(MASK)
      return
    }

    let lastIndex = 0
    let digitIndex = 0

    let result = MASK.replaceAll(MASK_PLUG, (plug, index) => {
      if (digits[digitIndex]) {
        lastIndex = index
        return digits[digitIndex++]
      }

      return plug
    })

    setPhone(result)
  }

  function updateName(evt: ChangeEvent<HTMLInputElement>) {
    setName(evt.target.value)
  }

  async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    if (phone.length < MASK.length || !name.length) {
      // TODO: validation error msg
      return
    }

    setLoading(true)

    try {
      // TODO: modal for success/error
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

      setPhone(MASK)
      setName('')
    } catch {
    }
    setLoading(false)
  }

  return (
    <form action="/api/order" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
      <Input type="text" name="phone" label="Телефон" value={phone} onChange={updatePhone} ref={phoneRef} required/>
      <Input type="text" name="name" label="Ваше имя" placeholder="Введите имя" value={name} onChange={updateName} />
      <Button tag="button" type="submit" disabled={loading}>Записаться на занятие</Button>
    </form>
  )
}
