import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Companies from '../sections/Companies'
import ProductVideo from '../sections/ProductVideo'
import Departments from '../sections/Departments'
import Teachers from '../sections/Teachers'
import Review from '../sections/Review'
import Register from '../sections/Register'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className={styles.fluid}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.head}>
        <div className={styles.container}>
          <Navbar />
          <Hero />
        </div>
      </div>
      <Companies />
      <ProductVideo />
      <Departments />
      <Teachers />
      <Review />
      <Register />
      <Footer />
    </div>
  )
}
