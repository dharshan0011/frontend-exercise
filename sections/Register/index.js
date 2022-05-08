import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Register.module.css'
import Stroke from '../../assets/design/stroke.svg'
import Cta from '../../common/Cta'
import { CurvedArrow } from '../../assets/icons'

const index = () => {
  return (
    <section className={styles.container}>
      <div className={styles.offset}>
        <div className={styles.designElement}>
          <Image src={Stroke} width={381} height={181.79} />
        </div>
      </div>
      <div className={styles.fluid}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h1>
              Create Free Account <br /> & Get Register
            </h1>
            <div className={styles.registerBtn}>
              <Cta>Register Now</Cta>
            </div>
            <div className={styles.curvedArrow}>
              <CurvedArrow />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image src='/register.png' width={626} height={490} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
