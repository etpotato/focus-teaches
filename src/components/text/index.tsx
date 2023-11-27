import { FC, ReactNode } from 'react'
import cn from 'classnames'
import styles from './index.module.css'

export type TextProps = {
  tag: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL'
  bold?: boolean
}

export const Text: FC<TextProps> = ({ tag, children, className, size = 'M', bold = false }) => {
  const Tag = tag

  return <Tag className={cn(styles.text, styles[size], {[styles.bold]: bold}, className)}>{children}</Tag>
}
