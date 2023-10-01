import './globals.css'
import { Barlow } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import Head from 'next/head'
const inter = Barlow({ subsets: ['latin'] ,
weight:['300','400','500']})
export const metadata = {
  title: 'Code Transformer by sumit',
  description:
    'Change the language of code in seconds',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"><Head>
    <title>
      Code Transformer by Sumit Ahire
    </title>
    <meta
      name="description"
      content="Chatgpt based  code translator"
      key="desc"
    />
  </Head>

      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
