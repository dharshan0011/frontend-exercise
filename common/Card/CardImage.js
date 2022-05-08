import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Common.module.css'
const CardImage = ({ src }) => {
  return (
    <div className={styles.cardImage}>
      <Image src={src} width={393} height={280} />
    </div>
  )
}

export default CardImage
