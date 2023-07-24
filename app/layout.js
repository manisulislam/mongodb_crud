import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MONG0DB CRUD',
  description: 'Mongodb crud operation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-auto max-w-3xl p-9'>
          <Navbar></Navbar>
          <div className='mt-8'>
          {children}
          </div>
         
        </div>
       </body>
    </html>
  )
}
