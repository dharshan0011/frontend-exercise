import React from 'react'
import styles from '../styles/Common.module.css'

const Cta = ({ children, style }) => {
  return (
    <button className={styles.cta} style={{ ...style }}>
      {children}
    </button>
  )
}

export default Cta
