import Image from 'next/image'
import React from 'react'
import {
  GoogleLogoDark,
  InstagramLogoDark,
  LinkedInLogoDark,
  TwitterLogoDark,
} from '../../assets/icons'
import Cta from '../../common/Cta'
import Heading from '../../common/Heading'
import styles from '../../styles/Teachers.module.css'
import Curly from '../../assets/design/curly-3.svg'

const index = () => {
  return (
    <section className={styles.fluid}>
      <div className={styles.designElement}>
        <Image src={Curly} width={500} height={100.04} />
      </div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Heading>
            Introduce with Our <br /> Famous Teacher
          </Heading>
          <div>
            <Cta>View All Teachers</Cta>
          </div>
        </div>
        <div className={styles.columnContainer}>
          <div className={styles.column}>
            <div>
              <Image src='/teacher-1.png' width={425} height={552.65} />
            </div>
            <div className={styles.columnContent}>
              <h3>Shaapir Prio</h3>
              <p>Assistant Director</p>
              <div className={styles.socialContainer}>
                <GoogleLogoDark />
                <TwitterLogoDark />
                <InstagramLogoDark />
                <LinkedInLogoDark />
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div>
              <Image src='/teacher-2.png' width={425} height={552.65} />
            </div>
            <div className={styles.columnContent}>
              <h3>Sellina</h3>
              <p>Director</p>
              <div className={styles.socialContainer}>
                <GoogleLogoDark />
                <TwitterLogoDark />
                <InstagramLogoDark />
                <LinkedInLogoDark />
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div>
              <Image src='/teacher-3.png' width={425} height={552.65} />
            </div>
            <div className={styles.columnContent}>
              <h3>John Smith</h3>
              <p>Assistant Director</p>
              <div className={styles.socialContainer}>
                <GoogleLogoDark />
                <TwitterLogoDark />
                <InstagramLogoDark />
                <LinkedInLogoDark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
