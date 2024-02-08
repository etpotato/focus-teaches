"use client"

import { useDataContext } from "@/contexts"
import { Form as FormComponent, Heading } from '../../components'
import styles from './index.module.css'

export const Form = () => {
  const data = useDataContext()

  if (!data) {
    return null
  }

  return (
    <section className={styles.order} id={data.cta_anchor.slice(1)}>
      <Heading title={data.form.title} subtitle={data.form.subtitle} className={styles.heading} />
      <FormComponent />
    </section>
  )
}
