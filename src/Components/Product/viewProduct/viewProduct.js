import React from 'react'
import {withRouter} from 'react-router-dom'
import style from './viewProduct.module.css'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'
const viewProduct = (props)=>{

  const products = props.products;
 let view;
  products.forEach(item=>{
    if(item.id == props.match.params.id){
      view = item
    }
  })

  return(
    <div className={style.Product}>
      <div className={style.ViewProductImg}>
        <img src={view.img}/>
      </div>
      <ul className={style.viewProductDetails}>
        <li><h3>{view.title}</h3></li>
        <li>{view.description}</li>
        <li>{view.Price}</li>
        <br/>
      <li>  <AddToCartBtn  clicked={()=> props.clicked(view.id)} background={true}>Add To Cart</AddToCartBtn></li>
      </ul>

    </div>
  )
}
export default withRouter(viewProduct);
