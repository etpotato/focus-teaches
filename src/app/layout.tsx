import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import data from '../data.json'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
