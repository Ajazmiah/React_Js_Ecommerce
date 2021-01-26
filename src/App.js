  import React, { Component} from 'react';
  import { Route, withRouter, Switch } from 'react-router-dom'
  import Layout from './Components/Layout/Layout'
  import Products from './Containers/Products/Products'
  import ShoppingCart from './Containers/ShoppingCart/ShoppingCart'
  import Header from './Components/Header/Header'
  import Footer from './Components/Footer/Footer'
  import Home from './Components/Home/Home'

  import Orders from './Containers/ShoppingCart/Order/Order'
  import OrderPlaced from './Containers/ShoppingCart/Checkout/ThankYou'
  import {connect} from 'react-redux'
  import * as actions from './Store/actions/index'
  import asyncComponent from './hoc/asyncComponents'

//=====================================================================


  //Lazy Loading-----------------------------
  const AsyncViewItem =  asyncComponent(()=>{
    return import('./Components/Product/viewProduct/viewProduct')
  })

  class App extends Component {
    viewProductHanddler = (id, imgURL)=>{
    this.props.history.push({
      pathname: '/products/product/'+id
    })
     this.props.onDisplayImage(imgURL)
   }


  render(){
      return (
          <div>
            <Header itemsSelected={this.props.selectedItem.length}/>
            <Layout>
                <Switch>
                  <Route path='/' exact component ={Home}/>
                  <Route exact path='/products'
                         render={()=><Products
                                      products={this.props.products}
                                      clicked={this.props.onProductADD}
                                      category={this.props.onProductFilter}
                                      viewProduct={this.viewProductHanddler}/>}
                                      />
                  <Route path='/shoppingcart'exact component={ShoppingCart}/>
                  <Route
                      path='/products/product/:id'component={ ()=> <AsyncViewItem
                      products={this.props.products}
                      clicked={this.props.onProductADD} exact />}
                      />

                  <Route path='/OrderPlaced'component={OrderPlaced}/>
                  <Route render={()=> <h1>PAGE NOT FOUND</h1>}/>
              </Switch>
            </Layout>
            <Footer/>
          </div>

      );
    }

  }

const mapStateToProps = state =>{
  return{
      products: state.cartProductReducer.product,
      selectedItem: state.cartProductReducer.selectedItem,
      id: state.cartProductReducer.id,
      totalPrice: state.cartProductReducer.totalPrice,
      orderSubmited: state.orderReducer.orderSubmited
      }
    }
const mapDispatchToProps = dispatch =>{
  return{
    onProductADD: (id)=> dispatch(actions.productAdded(id)),
    OnorderRetrieveInit:(orders)=> dispatch(actions.orderRetrieveInit()),
    onProductFilter:(category)=> dispatch(actions.filterProduct(category)),
    onDisplayImage: (url)=> dispatch(actions.displayImage(url))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
