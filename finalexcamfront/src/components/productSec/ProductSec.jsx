import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProductsThunk } from '../../redux/reducers/productsSlice'
import { postWishThunk } from '../../redux/reducers/wishSlice'
import styles from './ProductSec.module.scss'

const ProductSec = () => {

   const navigation = useNavigate()


   const goDetail = (item) => {
    navigation('/detail', {state:{item}})
   }


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    const products = useSelector((state) => state.products.products) || []


    const favoriAt = (item) => {
        dispatch(postWishThunk(item))
    }
  return (
    <div className={styles.container}>
        <div className={styles.cards}>
          {products && products.map(item => {
            return <div className={styles.card}>
                <img onClick={() => goDetail(item)} src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button onClick={() => favoriAt(item)}>Favori At</button>
            </div>
          })}
        </div>
    </div>
  )
}

export default ProductSec