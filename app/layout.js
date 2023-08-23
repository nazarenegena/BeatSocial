import './globals.css'
import { Figtree } from 'next/font/google'
import Navbar from '@/components/Navbar'


const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'BeatSocial',
  description: 'listen to your Tune',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar>
{children}
        </Navbar>
       
      </body>
    </html>
  )
}
