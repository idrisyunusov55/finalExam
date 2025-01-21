import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <p>Frolar</p>
            <h1>Excellent bouquets for you</h1>
        </div>
    </div>
  )
}

export default Hero