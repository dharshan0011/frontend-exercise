import React from 'react'
import styles from '../../styles/Common.module.css'

const CardText = ({ children }) => {
  return <p className={styles.cardText}>{children}</p>
}

export default CardText
