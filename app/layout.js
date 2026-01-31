import { Inter, Roboto_Slab } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto_Slab({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'SNEP Kenya | Solution for Nature & Enterprise',
  description: 'Mobilizing local communities on environmental conservation solutions and poverty reduction.',
  icons: {
    icon: '/logo.png', // Replaces default Vercel icon
  },
}

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}
