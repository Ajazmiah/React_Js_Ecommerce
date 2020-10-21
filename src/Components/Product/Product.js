import React from 'react';
import style from './Product.module.css'
import AddToCartBtn from './AddToCartBtn/AddToCartBtn'
import {withRouter} from 'react-router-dom'


const product = (props)=>{
  return(
      <div className={style.Product}>
          <div onClick={ ()=> {props.viewProduct(props.product.id)}}>
          <img src={props.product.img} style={{maxWidth:'100%'}}/>

          <ul>
              <li>${props.product.Price.toFixed(2)}</li>
              <li><h3>{props.product.title}</h3></li>
              <li><p>{props.product.description}</p></li>
          </ul>
          </div>
          <AddToCartBtn clicked={()=> props.clicked(props.product.id)} background={true}>Add To Cart</AddToCartBtn>
      </div>

  )
}

export default withRouter(product);
