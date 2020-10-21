import React, { Component} from 'react';
import Product from '../../Components/Product/Product.js'

import style from './Products.module.css'

class Products extends Component {

render(){
  const products = this.props.products;
  const items = products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    clicked={this.props.clicked}
                    viewProduct={this.props.viewProduct}/>
          ));

  return (
    <div className={style.Products}>
      {items}
    </div>
    );
  }
}

export default Products;
