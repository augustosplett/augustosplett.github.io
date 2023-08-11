import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'

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
        <p>Hello there! I'm thrilled to share my journey with you. Over the past six dynamic years in the technology industry, I've gained valuable experience that showcases my adaptability and eagerness to learn. I've had the opportunity to explore diverse sectors like finance, services, and outsourcing companies, allowing me to seamlessly embrace new challenges and technologies.

My real passion lies in problem-solving and coding. As a junior enthusiast, I'm currently immersed in the world of JavaScript, React, NextJS, and C#. With each line of code, I'm taking strides towards becoming a skilled developer. While my journey is still in its early stages, I'm armed with a toolkit of determination and a willingness to dive deep into projects, absorbing every learning opportunity along the way.

Thank you for joining me on this exciting path of growth and development. Through my portfolio, you'll witness not only my projects but also my unwavering commitment to evolving as a developer. Let's embrace the coding adventures ahead and turn aspirations into accomplishments, one line of code at a time!</p>
      </main>
    </>
  )
}
