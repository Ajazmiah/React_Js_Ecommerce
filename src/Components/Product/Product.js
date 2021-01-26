import React from 'react';
import style from './Product.module.css'
import {withRouter} from 'react-router-dom'
import SingleProduct from './singleProduct'

const product = (props)=>{


return(
      <div className={style.Product}>
        <SingleProduct
          viewProduct={props.viewProduct}
          title={props.title}
          description={props.description}
          price={props.price}
          id={props.id}
          img={props.img}
          clicked={props.clicked}/>
      </div>

  )
}

export default withRouter(product);
