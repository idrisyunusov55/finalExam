import React from 'react'
import styles from './Our.module.scss'

const Our = () => {
  return (
    <div className={styles.container}>
        <div className={styles.our}>
            <div className={styles.text}>
                <div className={styles.txt}>
                <h4>Our Mission</h4>
                <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
                <button className={styles.obtn}>Read more</button>
                </div>
            </div>
            <div className={styles.imgbox}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Our