import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishThunk, getWishThunk } from '../../../redux/reducers/wishSlice'
import styles from './WishSec.module.scss'

const WishSec = () => {

    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWishThunk())
    }, [])

    const wish = useSelector((state) => state.wish.wish) || []


    const sil = (id) => {
        dispatch(deleteWishThunk(id))
    }
  return (
    <div className={styles.container}>
    <div className={styles.cards}>
      {wish && wish.map(item => {
        return <div className={styles.card}>
            <img src={item.thumbnail} alt="" />
            <span>{item.title}</span>
            <span>{item.price}</span>
            <button onClick={() => sil(item._id)} >SIL</button>
        </div>
      })}
    </div>
</div>
  )
}

export default WishSec