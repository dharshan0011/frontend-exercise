import React from 'react'
import Content from '../../common/Content'
import Cta from '../../common/Cta'
import Heading from '../../common/Heading'
import ZigZag from '../../assets/design/zigzag.svg'
import styles from '../../styles/Review.module.css'
import { LeftArrowDark, RightArrowLight, StarIcon } from '../../assets/icons'
import Image from 'next/image'

const index = () => {
  return (
    <section className={styles.fluid}>
      <div className={styles.container}>
        <div className={styles.featureContainer}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.authorDetails}>
                <Image src='/reviewer-1.png' width={87.21} height={87.21} />
                <div>
                  <h3>Jaquon Hard</h3>
                  <p>Civil Engineer</p>
                </div>
              </div>
              <div className={styles.rating}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className={styles.cardBody}>
              <p>
                “With Edu, we’re able to easily track our performance in full
                detail. It’s become an essential tool for us to grow and engage
                with our audience.”
              </p>
            </div>
          </div>
          <div className={styles.controllerContainer}>
            <div className={styles.controller}>
              <LeftArrowDark />
            </div>
            <div className={styles.controller}>
              <RightArrowLight />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <div className={styles.authorDetails}>
                <Image src='/reviewer-2.png' width={87.21} height={87.21} />
                <div>
                  <h3>Jaquon Hard</h3>
                  <p>Civil Engineer</p>
                </div>
              </div>
              <div className={styles.rating}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className={styles.cardBody}>
              <p>
                “With Edu, we’re able to easily track our performance in full
                detail. It’s become an essential tool for us to grow and engage
                with our audience.”
              </p>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <Heading>
            5000 Reviews from <br />
            Our Successful <br />
            Students!
          </Heading>
          <Content>
            Teractively recaptiualize intermandated e-commerce after sticky
            applications. Dynamically reintermediate viral testing procedures
            through technically sound.
          </Content>
          <Cta>Get Started Today</Cta>
          <div className={styles.designElement}>
            <Image src={ZigZag} width={634.14} height={84.11} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
