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
    <footer className={styles.container}>
      <div className={styles.content}>
        <div>
          <Image src='/logo-light.png' width={74} height={41.37} />
          <p className={styles.description}>
            Professionally scale cross functional human capital and extensive
            technology.
          </p>
          <div className={styles.socialContainer}>
            <div className={styles.social}>
              <GoogleLogoLight />
            </div>
            <div className={styles.social}>
              <TwitterLogoLight />
            </div>
            <div className={styles.social}>
              <InstagramLogoLight />
            </div>
            <div className={styles.social}>
              <LinkedInLogoLight />
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Services</h3>
          <p>Documentation</p>
          <p>Design</p>
          <p>Themes</p>
          <p>Illustrations</p>
        </div>
        <div className={styles.column}>
          <h3>Company</h3>
          <p>About</p>
          <p>Terms</p>
          <p>Privacy Policy</p>
          <p>Career</p>
        </div>
        <div className={styles.column}>
          <h3>Job Info</h3>
          <p>Select</p>
          <p>Services</p>
          <p>Payment</p>
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <p>
            <span className={styles.contactType}>Call:</span> 9715546963
          </p>
          <p>
            <span className={styles.contactType}>Email:</span>example@gmail.com
          </p>
          <p>
            <span className={styles.contactType}>Address:</span>Dhaka,
            Bangladesh
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright©chakri.All right reserved
      </div>
    </footer>
  )
}

export default Footer
