import React from 'react'
import styles from '../../styles/Common.module.css'

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>
}

export default Card
