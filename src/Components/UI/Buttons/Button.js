import React from 'react'
import style from './AddToCart.module.css'

const AddToCartBtn= (props)=>{

return(
    <button className={style.Button} style={props.background ? {background:'#388E3C'} : null}
            onClick={props.clicked}> {props.children}
    </button>
  )
}
export default AddToCartBtn
