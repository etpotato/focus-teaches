"use client"

import { useDataContext } from "@/contexts"
import { Text, Form as FormComponent } from '../../components'
import styles from './index.module.css'

export const Form = () => {
  const data = useDataContext()

  if (!data) {
    return null
  }

  return (
    <section className={styles.order}>
      <Text tag="h3" size="XL">{data.form.title}</Text>
      <Text tag="p" size="L">{data.form.subtitle}</Text>
      <FormComponent />
    </section>
  )
}
