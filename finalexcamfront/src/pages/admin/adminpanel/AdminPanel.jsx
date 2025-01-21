import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsThunk, getProductsThunk, postProductsThunk } from '../../../redux/reducers/productsSlice';
import { deleteWishThunk } from '../../../redux/reducers/wishSlice';
import styles from './AdminPanel.module.scss'

const AdminPanel = () => {

const dispatch = useDispatch()
const [text, setText] = useState('')
const [sort, setSort] = useState('asc')

useEffect(() => {
    dispatch(getProductsThunk())
},[dispatch])

const products = useSelector((state) => state.products.products) || []

const filteredProducts = products.filter(product => product.title.toLowerCase().includes(text.toLowerCase())).sort((a, b) => {
    if (sort == 'asc') {
        return a.price -b.price
    } else {
        return b.price - a.price
    }
})


const delItem = (id) => {
    dispatch(deleteProductsThunk(id))
    dispatch(deleteWishThunk(id))
}




    const formik = useFormik({
        initialValues: {
          thumbnail: '',
          title: '',
          price: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          dispatch(postProductsThunk(values))
        },
      });
  return (
    <div className={styles.container}>

      <div className={styles.fbtn}>
        <input type="text" placeholder='search' name='' id='' onChange={(e) => setText(e.target.value)} />
        <button onClick={() => setSort('asc')}>azdan coxa </button>
        <button onClick={() => setSort('dasc')}>coxdan aza</button>
      </div>

        <form onSubmit={formik.handleSubmit}>
       <label htmlFor="thumbnail">Thumbnail</label>
       <input
         id="thumbnail"
         name="thumbnail"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.thumbnail}
       />
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="price"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>


     <table className={styles.myTable}>
        <tr>
            <th>THUMBNAIL</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>SIL</th>
        </tr>

        {filteredProducts && filteredProducts.map(item => {
            return <tr>
                <td><img src={item.thumbnail} alt="" /></td>
                <td><span>{item.title}</span></td>
                <td><span>{item.price}</span></td>
                <td><button   onClick={() => delItem(item._id)}>SIL</button></td>
            </tr>
        })}
     </table>
    </div>
  )
}

export default AdminPanel