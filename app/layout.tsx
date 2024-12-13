import './globals.css';
import { Inter } from 'next/font/google';

const contentFont = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-content',
});

import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Falic Group',
  description: 'Falic Group',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${contentFont.variable} m-0`}>
        <main className="flex flex-col items-center">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
