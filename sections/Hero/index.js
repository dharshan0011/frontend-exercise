import React from 'react'
import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
import Content from '../../common/Content'
import Cta from '../../common/Cta'
import { EmailIcon, HeartIcon } from '../../assets/icons'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.heading}>
          Start Your
          <br />
          Future
          <br />
          Education
        </h1>
        <Content>
          Credibly redefine distinctive total linkage vis-a-vis multifunc data.
          Phosfluorescently impact goal-oriented strategic
        </Content>
        <Cta>Discover More</Cta>
      </div>
      <div className={styles.heroImageContainer}>
        <div className={styles.card}>
          <div
            className={styles.cardImageContainer}
            style={{
              background: '#6b47fc',
              boxShadow: '2px 8px 20px rgba(107, 71, 252, 0.5)',
            }}
          >
            <EmailIcon />
          </div>
          <h2>Congratulation</h2>
          <p>You got a new email</p>
        </div>
        <div>
          <Image src='/hero.png' width={812} height={743.5} />
        </div>
        <div className={styles.card}>
          <div
            className={styles.cardImageContainer}
            style={{
              background: '#51C8FF',
              boxShadow: '2px 8px 20px rgba(81, 200, 255, 0.5)',
            }}
          >
            <HeartIcon />
          </div>
          <h2
            style={{ fontWeight: '700', fontSize: '30px', lineHeight: '45px' }}
          >
            40k +
          </h2>
          <p>Happy Students</p>
          <div className={styles.studentImageContainer}>
            <div className={styles.studentImage}>
              <Image src='/student-1.png' width={46.33} height={46.33} />
            </div>
            <div className={styles.studentImage}>
              <Image src='/student-2.png' width={46.33} height={46.33} />
            </div>
            <div className={styles.studentImage}>
              <Image src='/student-3.png' width={46.33} height={46.33} />
            </div>
            <div className={styles.studentImage}>
              <Image src='/student-4.png' width={46.33} height={46.33} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
