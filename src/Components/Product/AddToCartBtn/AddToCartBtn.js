import React from 'react'
import style from './AddToCart.module.css'

const AddToCartBtn= (props)=>{

return(
    <button
        className={style.Button}
        disabled={props.disable}
        style={props.background ? {background:'#388E3C',marginTop: '1rem'} : null}
        onClick={props.clicked}> {props.children}
    </button>
  )
}
export default AddToCartBtn
