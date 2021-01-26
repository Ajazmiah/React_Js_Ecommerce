import React from 'react'
import style from './ShoppingCart.module.css'

const Indicator = ()=>{
  return(
    <ul className={style.Indicator}>
      <li className={style.ItemIndicator}>Item</li>
      <li>Details</li>
      <li>Quantity</li>
    </ul>
  )
}

export default Indicator
