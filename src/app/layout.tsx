/* eslint-disable camelcase */
import './globals.css'
import { ReactNode } from 'react'

import { DM_Sans } from 'next/font/google'

import { NavBar } from '@/components/NavBar'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'LSIQUEIRA.DEV Porfolio',
  description:
    'Destaque-se no mercado com um projeto web especialmente desenvolvido para o seu negócio.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={dm_sans.className}>
        <div className="container mx-auto px-4">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
