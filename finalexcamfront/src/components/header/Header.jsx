import React from 'react'
import styles from './Header.module.scss'
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {


  const navigation = useNavigate()

  const goWish = () => {
    navigation('/wish')
  }
  const goAdmin = () => {
    navigation('/admin')
  }
  const goHome = () => {
    navigation('/')
  }
  return (
  <header className={styles.header}>
    <div className={styles.container}>
        <div className={styles.logo}  onClick={goHome}>
            <h1>Floral Studio</h1>
        </div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a onClick={goWish} href="">Wish</a></li>
                <li><a onClick={goAdmin} href="">Admin Panel</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </nav>
        <FaBars  className={styles.bar}/>
    </div>
  </header>
  )
}

export default Header