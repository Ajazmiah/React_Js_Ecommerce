import React, { Component} from 'react';
import Product from '../../Components/Product/Product.js'
import {connect} from 'react-redux'
import * as actions from '../../Store/actions/index'
import style from './Products.module.css'

class Products extends Component {

state = {search: ''}


render(){
  const items = this.props.products.filter((product, index)=>{
    if(this.state.search === '')
      return product
    if(product.title.toUpperCase().includes(this.state.search.toUpperCase()))
      return product
  }).map(product => (
        <Product
          key={product.id}
          img={product.img}
          title={product.title}
          description={product.description}
          price={product.Price}
          id={product.id}
          product={product}
          clicked={this.props.clicked}
          viewProduct={this.props.viewProduct}/>
      ));

  return (
    <div className={style.ProductPage}>
        <div className={style.CategoryList}>
          <input type="text" placeholder='Search..'className={style.Search} onKeyUp={event => this.setState({search:event.target.value})}/>
          <h2 className={style.CategoryHeader}>Category</h2>
          <ul>
            <li onClick={()=>this.props.category('All')}>All</li>
            <li onClick={()=>this.props.category('Laptop')}>Laptop</li>
            <li onClick={()=>this.props.category('Phone')}>Smart Phones</li>
          </ul>
        </div>
      <div className={style.Products}>
        {items}
      </div>
    </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
      products: state.cartProductReducer.product,
      selectedID: state.cartProductReducer.selectedID,
      disableBtn: state.orderReducer.disableBtn
      }
    }


const mapDispatchToProps = dispatch =>{

  return{
    onSearchFilter: (search)=> dispatch(actions.searchFilter(search))
  }
}



export default connect(mapStateToProps,mapDispatchToProps )(Products);
