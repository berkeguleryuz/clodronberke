import '../styles/globals.css'
import Nav from '@/components/Nav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clodron | Your Web Marketing Agency',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav /> 
        {children}
      </body>
    </html>   
  )
}
