import React from 'react'
import styles from '../../styles/Common.module.css'

const CardCtaLink = ({ children, to }) => {
  return (
    <a href={to} className={styles.cardCtaLink}>
      {children}
    </a>
  )
}

export default CardCtaLink
