import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'

import About from '@/components/about/About'
import Portfolio from '@/components/portfolio/Portfolio'
import Contact from '@/components/contact/Contact'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Augusto Madeira Splett</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        
        <About />
        
        <Portfolio />

        <Contact />
      </main>
    </>
  )
}
