import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import cn from 'classnames'
import { Inter } from 'next/font/google'
import data from '../data.json'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: data.hero.tag,
  description: data.hero.text.join(' '),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={cn(inter.className, styles.body)}>{children}</body>
    </html>
  )
}
