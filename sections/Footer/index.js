import Image from 'next/image'
import React from 'react'
import {
  GoogleLogoLight,
  InstagramLogoLight,
  LinkedInLogoLight,
  TwitterLogoLight,
} from '../../assets/icons'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.fluid}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <Image src='/logo-light.png' width={74} height={41.37} />
            <p className={styles.description}>
              Professionally scale cross functional human capital and extensive
              technology.
            </p>
            <div className={styles.socialContainer}>
              <a href='#' className={styles.social}>
                <GoogleLogoLight />
              </a>
              <a href='#' className={styles.social}>
                <TwitterLogoLight />
              </a>
              <a href='#' className={styles.social}>
                <InstagramLogoLight />
              </a>
              <a href='#' className={styles.social}>
                <LinkedInLogoLight />
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <h3>Services</h3>
            <a href='#'>Documentation</a>
            <a href='#'>Design</a>
            <a href='#'>Themes</a>
            <a href='#'>Illustrations</a>
          </div>
          <div className={styles.column}>
            <h3>Company</h3>
            <a href='#'>About</a>
            <a href='#'>Terms</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Career</a>
          </div>
          <div className={styles.column}>
            <h3>Job Info</h3>
            <a href='#'>Select</a>
            <a href='#'>Services</a>
            <a href='#'>Payment</a>
          </div>
          <div className={styles.column}>
            <h3>Contact</h3>
            <a href='tel:9715546963'>
              <span className={styles.contactType}>Call: </span> 9715546963
            </a>
            <a href='mailto:example@gmail.com'>
              <span className={styles.contactType}>Email: </span>
              example@gmail.com
            </a>
            <a href='#'>
              <span className={styles.contactType}>Address: </span>Dhaka,
              Bangladesh
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright©chakri.All right reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
