import { FC } from 'react'
import styles from './index.module.css'

export type Heading = {
  title: string;
  subtitle: string;
  className?: string;
}

export const Heading: FC<Heading> = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}
