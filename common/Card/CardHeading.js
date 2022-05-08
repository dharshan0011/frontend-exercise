import React from 'react'
import styles from '../../styles/Common.module.css'

const CardHeading = ({ children }) => {
  return <h2 className={styles.cardHeading}>{children}</h2>
}

export default CardHeading
