import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './NotFaund.module.scss'

const NotFaund = () => {


    const navigation = useNavigate()

    const goBack = () => {
        navigation(-1)
    }
  return (
    <div className={styles.container}>
        <h1>NOT FAUND</h1>
        <button onClick={goBack}>GO BACK</button>    
    </div>
  )
}

export default NotFaund