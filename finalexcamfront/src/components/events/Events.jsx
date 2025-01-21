import React from 'react'
import styles from './Events.module.scss'

const Events = () => {
  return (
    <div className={styles.container}>
        <h6>Devoted to wonderful beauty</h6>
        <h1>Events Pricing</h1>

        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.txtx}><h4>$16</h4> 
                <span>per table</span></div>
                
                <h3>Birthday Events</h3>
                 <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                 <button>Shop now</button>
            </div>
            <div className={styles.card}>
            <div className={styles.txtx}><h4>$16</h4> 
                <span>per table</span></div>
                <h3>Wedding Events</h3>
                 <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                 <button>Shop now</button>
            </div>
            <div className={styles.card}>
            <div className={styles.txtx}><h4>$16</h4> 
                <span>per table</span></div>
                <h3>Wedding Events</h3>
                 <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                 <button>Shop now</button>
            </div>
        </div>
    </div>
  )
}

export default Events