import React from 'react'
import styles from '../styles/Common.module.css'

const Content = ({ children, style }) => {
  return (
    <p className={styles.content} style={{ ...style }}>
      {children}
    </p>
  )
}

export default Content
