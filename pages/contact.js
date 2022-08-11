import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../componenets/Navbar'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App Gist Contact 🚀</title>
        <meta name="contact page" content="Generated by Touhidul Islam Chayan" />
        <link rel="icon" href="/C.G.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>Contact Page</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
        >
          Powered by{' '}
          <span style={{marginLeft:"10px"}}>
            <Image src="/C.G.png" alt="CHNsPart Logo" width={30} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}
