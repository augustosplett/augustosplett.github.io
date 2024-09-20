import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from './MainLayout.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({ children, pageName }) {
  return (
    <>
      <Head>
        <title>{`Augusto Splett - ${pageName}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ display: 'flex', flexDirection: 'column',  minHeight: '100vh' }}>
        <Navbar />
        <main className={`${styles.main} ${inter.className}`} style={{ flex: 1, padding: '1rem', alignItems: 'center', justifyContent: 'flex-start' }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
