  import React, { Component} from 'react';
  import { Route, withRouter } from 'react-router-dom'
  import Layout from './Components/Layout/Layout'
  import Products from './Containers/Products/Products'
  import ShoppingCart from './Containers/ShoppingCart/ShoppingCart'
  import Header from './Components/Header/Header'
  import Home from './Components/Home/Home'
  import ViewProduct from './Components/Product/viewProduct/viewProduct'
  import Checkout from './Containers/ShoppingCart/Checkout/Checkout'
  import ThankYou from './Containers/ShoppingCart/Checkout/ThankYou'
  import data from './Data/Data.js'

  class App extends Component {
    state={
      products: data,
      selectedItem:[],
      totalPrice: 0,
      id:[]
    }

  quantityChangeHanddler = (id, index,event)=>{
    let itemPrice = this.state.selectedItem[index].Price;
    let value = event.target.value;

    if(event.target.value >= 1){
      this.setState((prevState) => ({
          totalPrice: (prevState.totalPrice + itemPrice*value)-itemPrice* (value-1)
        }));
    }
  }

  clearShoppingCartHandler= ()=>{

    this.setState((prevState, props) => ({
      selectedItem: [],
      id: []
  }));
  this.props.history.push({
    pathname: '/products/checkout/thankyou'
  })

}

  viewProductHanddler = (id)=>{
    this.props.history.push({
      pathname: '/products/product/'+id
    })
  }

  addToCartHanddler= (id)=>{
    let cartItems =[];
    let selectedID;

    if(this.state.id.indexOf(id) === -1){
      this.state.products.forEach((item, i) => {

        if(item.id === id){
          cartItems = [...this.state.selectedItem];
          cartItems= cartItems.concat(item);
          selectedID = [...this.state.id];
          selectedID=  selectedID.concat(id);

          this.setState({
          selectedItem: cartItems,
          id:selectedID
        })

        this.setState((prevState, props) => ({
            totalPrice: prevState.totalPrice + item.Price
          }));
        }
     });
   }
   else{
     alert('ITEM IS ALREADY IN THE CART')
   }
  }

  removeHanddler = (id)=>{
      let removeItem = [...this.state.selectedItem];
      let selectedID = [...this.state.id];

      removeItem.forEach((item, i) => {
        if(item.id === id){
          removeItem.splice(i,1);
          selectedID.splice(i,1)

          this.setState((prevState, props) => ({
              totalPrice: prevState.totalPrice - item.Price,
              selectedItem: removeItem,
              id: selectedID
          }));
        }
      });
    }

  render(){
      return (
          <div>
            <Header itemsSelected={this.state.selectedItem.length}/>

            <Layout>
              <Route path='/' exact component ={Home}/>
              <Route
                  exact
                  path='/products'
                  render={()=><Products
                                  products={this.state.products}
                                  clicked={this.addToCartHanddler}
                                  viewProduct={this.viewProductHanddler}/>}/>
              <Route
                  path='/shoppingcart'
                  exact
                  render={()=><ShoppingCart
                                  selectedItem={this.state.selectedItem}
                                  totalPrice={this.state.totalPrice}
                                  quantityValue={this.state.quantityValue}
                                  remove={this.removeHanddler}
                                  change={this.quantityChangeHanddler}
                                  selectedID={this.state.id}/>}/>

            <Route
                path='/products/product/:id'component={ ()=> <ViewProduct
                products={this.state.products}
                clicked={this.addToCartHanddler} />}
                />
            <Route path='/shoppingcart/checkout' component={()=> <Checkout clicked={this.clearShoppingCartHandler}
                                                                           totalPrice={+this.state.totalPrice}
                                                                           selectedItem={this.state.selectedItem}
                                                                           />} />

            <Route path='/products/checkout/thankyou'component={ThankYou} />
            </Layout>
          </div>

      );
    }

  }

  export default withRouter(App);
