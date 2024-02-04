"use client"

import { useDataContext } from "@/contexts"
import { Text, Button } from '../../components'
import styles from './index.module.css'

export const Hero = () => {
  const data = useDataContext()

  if (!data) {
    return null
  }

  return (
    <section className={styles.hero}>
      <img src={data.hero.img.url} alt={data.hero.img.alt} className={styles.image}/>
      <div className={styles.backdrop}></div>
      <div className={styles.content}>
        <Text tag='p' className={styles.tag}>{data.hero.tag}</Text>
        <>
          {data.hero.text.map((textItem) => <Text tag='p' key={textItem} className={styles.text}>{textItem}</Text>)}
        </>
        <Button tag='a' href={data.cta_anchor} className={styles.cta}>{data.hero.cta}</Button>
      </div>
    </section>
  )
}
