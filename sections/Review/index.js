import React from 'react'
import Content from '../../common/Content'
import Cta from '../../common/Cta'
import Feature from '../../components/Feature'
import Heading from '../../common/Heading'
import ZigZag from '../../assets/design/zigzag.svg'
import styles from '../../styles/Review.module.css'
import Image from 'next/image'

const index = () => {
  return (
    <section className={styles.container}>
      <Feature imgSrc='/feature-review.png' imgWidth={816.27} imgHeight={499}>
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
      </Feature>
    </section>
  )
}

export default index
