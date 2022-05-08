import React from 'react'
import styles from '../../styles/Feature.module.css'
import Image from 'next/image'

const index = ({ imgSrc, imgWidth, imgHeight, children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} width={imgWidth} height={imgHeight} />
      </div>
      <div>{children}</div>
    </section>
  )
}

export default index
