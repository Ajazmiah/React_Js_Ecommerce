import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import style from './viewProduct.module.css'
import {Images} from '../../../Data/ProductImg'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'
import * as actions from '../../../Store/actions/index'


const viewProduct = (props)=>{
let view;
const products = props.products;

  products.forEach(item=>{
    if(item.id == props.match.params.id){
      view = item
    }
  })


const images = view.img.map(img=>(
  <li className={style.galleryImg} onClick={()=> props.onDisplayImage(img)} key={img}>
    <img src={img} />
  </li>
))

let mainImage ;
props.displayImage ? mainImage = props.displayImage : mainImage = view.img[0]

  return(
    <div className={style.Product}>
      <div className={style.ImageDiv}>
        <div className={style.mainImage}>
          <img src={mainImage} alt='PRODUCT'/>
        </div>
        <ul className={style.Gallery}>
          {images}
        </ul>
      </div>

      <div className={style.ProductDetailsDiv}>
        <ul className={style.ProductDetails}>
          <li><h3 className={style.Title}>{view.title}</h3></li>
          <li className={style.Description}>{view.description}</li>
          <li className={style.Price}>${view.Price}</li>
        </ul>
        <AddToCartBtn  clicked={()=> props.clicked(view.id)} background={true}>Add To Cart</AddToCartBtn>
      </div>
     </div>
  )
}

const mapDispatchToProps = dispatch =>{
  return{onDisplayImage: (url)=> dispatch(actions.displayImage(url))}
}
const mapStateToProps = state =>{
  return{displayImage: state.cartProductReducer.display}
}



export default connect(mapStateToProps,mapDispatchToProps)(withRouter(viewProduct));
