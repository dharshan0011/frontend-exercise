import React from 'react'
import styles from '../styles/Common.module.css'

const Heading = ({ children, style }) => {
  return (
    <h1 className={styles.heading} style={{ ...style }}>
      {children}
    </h1>
  )
}

export default Heading
