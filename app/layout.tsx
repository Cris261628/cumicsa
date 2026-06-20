import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import "leaflet/dist/leaflet.css";
const _geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'CUMICSA | Construcción e Infraestructura',
  description: 'Más de 35 años de experiencia en construcción, infraestructura y desarrollo de proyectos que transforman comunidades. Construyendo el futuro con excelencia.',
  keywords: ['construcción', 'infraestructura', 'proyectos', 'México', 'CUMICSA', 'edificación', 'obras civiles'],
  authors: [{ name: 'CUMICSA' }],
  openGraph: {
    title: 'CUMICSA | Construcción e Infraestructura',
    description: 'Más de 20 años de experiencia en construcción, infraestructura y desarrollo de proyectos que transforman comunidades.',
    type: 'website',
    locale: 'es_MX',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
