import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'LAU-CAM - Tecnología en iluminación',
  description: 'Especialistas en tecnología de iluminación. Soluciones innovadoras y eficientes para todos tus proyectos de iluminación.',
  keywords: ['iluminación', 'tecnología', 'LED', 'lámparas', 'sistemas de iluminación', 'eficiencia energética'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}