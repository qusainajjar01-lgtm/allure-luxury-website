import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Allure Modern Nails Spa | Luxury Nail Salon in Longview, TX',
  description: 'Experience luxury nail care at Allure Modern Nails Spa in Longview, Texas. Premium manicures, pedicures, nail art, and spa treatments. Under new management with 20% off selected services.',
  keywords: 'nail salon, Longview TX, manicure, pedicure, nail art, luxury spa, acrylic nails, gel nails',
  openGraph: {
    title: 'Allure Modern Nails Spa | Luxury Nail Salon in Longview, TX',
    description: 'Experience luxury nail care at Allure Modern Nails Spa. Premium manicures, pedicures, and spa treatments.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
