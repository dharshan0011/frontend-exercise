import React from 'react'
import styles from '../../styles/Companies.module.css'
import Image from 'next/image'
import Heading from '../../common/Heading'

const index = () => {
  return (
    <section className={styles.container}>
      <Heading>Trusted Companies</Heading>
      <div className={styles.content}>
        <Image src='/slack.png' width={170.55} height={49.16} />
        <Image src='/netflix.png' width={148.95} height={39.69} />
        <Image src='/fitbit.png' width={210} height={97} />
        <Image src='/google.png' width={149.01} height={49.07} />
        <Image src='/airbnb.png' width={148.96} height={46.36} />
      </div>
    </section>
  )
}

export default index
