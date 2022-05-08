import React from 'react'
import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
import Content from '../../common/Content'
import Cta from '../../common/Cta'

const Hero = () => {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.heading}>Start Your</h1>
        <h1 className={styles.heading}>Future</h1>
        <h1 className={styles.heading}>Education</h1>
        <Content>
          Credibly redefine distinctive total linkage vis-a-vis multifunc data.
          Phosfluorescently impact goal-oriented strategic
        </Content>
        <Cta>Discover More</Cta>
      </div>
      <div className={styles.heroImageContainer}>
        <Image src='/hero.png' width={812} height={743.5} />
      </div>
    </main>
  )
}

export default Hero
