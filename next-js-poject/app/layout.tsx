import './globals.css'
import type { Metadata } from 'next'
import { Inter, PT_Sans } from 'next/font/google'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
              <Header />
                <main className='container'>
                  {children}
                </main>
              <Footer />
        </body>
    </html>
  )
}
