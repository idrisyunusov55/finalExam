import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './DetailPages.module.scss'

const DetailPages = () => {


    const location = useLocation()

    const item = location.state?.item

  return (
    <div>
        {item ? (
            <div>
                <img src={item.thumbnail} alt="" />
                <span>{item.title}</span>
                <span>{item.price}</span>
            </div>
        ) : <h1>melumat yuxdur</h1>
    }
    </div>
  )
}

export default DetailPages