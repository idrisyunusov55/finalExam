import React from 'react'
import styles from './Team.module.scss'

const Team = () => {
  return (
    <div className={styles.container}>
        <p>Contacts</p>
        <h1>Our Team</h1>

        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                <h5>Velva Kopf</h5>
                <h6>Biologist</h6>
            </div>
            <div className={styles.card}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                <h5>Sarah Palmer</h5>
                <h6>Florist</h6>
            </div>
            <div className={styles.card}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                <h5>Jessica Swift</h5>
                <h6>Photographer</h6>
            </div>
        </div>
    </div>
  )
}

export default Team