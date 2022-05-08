import React from 'react'
import Content from '../../common/Content'
import Cta from '../../common/Cta'
import Feature from '../../components/Feature'
import Heading from '../../common/Heading'
import ZigZag from '../../assets/design/zigzag.svg'
import styles from '../../styles/ProductVideo.module.css'
import Image from 'next/image'

const index = () => {
  return (
    <section className={styles.container}>
      <Feature imgSrc='/feature-video.png' imgWidth={705} imgHeight={678}>
        <Heading>
          We Help to Create Possibility & Success in Your Career!
        </Heading>
        <Content>
          Continually administrate process-centric human capital rather than
          bleeding-edge methodologies. Distinctively supply accurate methods of
          empowerment before.
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
