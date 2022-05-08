import React from 'react'
import styles from '../../styles/Departments.module.css'
import Card from '../../common/Card'
import CardCtaLink from '../../common/Card/CardCtaLink'
import CardHeading from '../../common/Card/CardHeading'
import CardImage from '../../common/Card/CardImage'
import CardText from '../../common/Card/CardText'
import { RightArrow } from '../../assets/icons'
import Cta from '../../common/Cta'
import Heading from '../../common/Heading'
import Image from 'next/image'
import Curly from '../../assets/design/curly.svg'

const index = () => {
  return (
    <section className={styles.fluid}>
      <div className={styles.background}>
        <div className={styles.container}>
          <Heading>
            We Have Most of <br /> Popular Departments
          </Heading>
          <div className={styles.designElement}>
            <Image src={Curly} width={634.14} height={84.11} />
          </div>
          <div className={styles.cardContainer}>
            <Card>
              <>
                <CardImage src='/ai.png' />
                <CardHeading>Artificial Intelligence</CardHeading>
                <CardText>
                  Assertively parallel task synergistic deliverables after
                  high-quality.
                </CardText>
                <CardCtaLink to='#'>
                  Learn More
                  <RightArrow />
                </CardCtaLink>
              </>
            </Card>
            <Card>
              <>
                <CardImage src='/civil-engineering.png' />
                <CardHeading>Civil Engineering</CardHeading>
                <CardText to='#'>
                  Assertively parallel task synergistic deliverables after
                  high-quality.
                </CardText>
                <CardCtaLink to='#'>
                  Learn More
                  <RightArrow />
                </CardCtaLink>
              </>
            </Card>
            <Card>
              <>
                <CardImage src='/business-studies.png' />
                <CardHeading>Business Studies</CardHeading>
                <CardText>
                  Assertively parallel task synergistic deliverables after
                  high-quality.
                </CardText>
                <CardCtaLink to='#'>
                  Learn More
                  <RightArrow />
                </CardCtaLink>
              </>
            </Card>
          </div>
          <Cta>View All Department</Cta>
        </div>
      </div>
    </section>
  )
}

export default index
