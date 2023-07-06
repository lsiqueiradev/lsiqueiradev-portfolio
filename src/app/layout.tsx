/* eslint-disable camelcase */
import './globals.css'
import { ReactNode } from 'react'

import { Poppins } from 'next/font/google'

import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'LSIQUEIRA.DEV Porfolio',
  description:
    'Destaque-se no mercado com um projeto web especialmente desenvolvido para o seu negócio.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div className="container mx-auto px-4">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
