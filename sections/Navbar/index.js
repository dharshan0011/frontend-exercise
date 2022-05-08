import React from 'react'
import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'

const index = () => {
  return (
    <header>
      <nav className={styles.navigationContainer}>
        <div className={styles.logoContainer}>
          <Image
            src='/logo.png'
            alt='logo'
            width={130}
            height={73}
            className={styles.logo}
          />
        </div>
        <div className={styles.navLinksContainer}>
          <a href='#' className={`${styles.navLink} ${styles.activeLink}`}>
            Home
          </a>
          <a href='#' className={styles.navLink}>
            Admission
          </a>
          <a href='#' className={styles.navLink}>
            Academic
          </a>
        </div>
        <div className={styles.CtaContainer}>
          <button className={styles.Cta}>Contact Now</button>
        </div>
      </nav>
    </header>
  )
}

export default index
