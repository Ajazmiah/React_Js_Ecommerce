import React,{Component} from 'react'
import style from './ShoppingCart.module.css'
import CheckoutBtn from '../../Components/Product/AddToCartBtn/AddToCartBtn'
import {withRouter} from 'react-router'

class ShoppingCart extends Component{


  checkoutHandler = ()=>{
    this.props.history.push({
      pathname: '/shoppingcart/checkout'
    })
  }

  render(){
    const selectedItem = this.props.selectedItem;


    let item;
    let checkoutDetails

    if(selectedItem.length > 0){
        item = selectedItem.map((item, i) => {
            return(
              <div key={item.id} className={style.item}>

                <img src={item.img} />
                <div style={{fontSize: '.6rem'}}>
                  <p>${item.Price.toFixed(2)}</p>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>

                <div className={style.action}>
                <select name="quantity"onChange={(event) => {this.props.change(item.id, i,event)}} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>


                  <button className={style.Remove} onClick={()=> {this.props.remove(item.id)}}> Remove </button>



                </div>
              </div>)
          });
          checkoutDetails  = (
              <div className={style.Total}>
                  <h3 style={{flex:'0 0 70%'}}> TOTAL: ${this.props.totalPrice.toFixed(2)}</h3>
                  <CheckoutBtn background={true} clicked={this.checkoutHandler}>Checkout</CheckoutBtn>
              </div>
          )
        }
    else
      item=<h1>SHOPPING CART IS EMPTY</h1>

    return(
      <div>
        <div className={style.itemsWrapper}>{item}</div>
        {checkoutDetails}

      </div>
    )
  }
}

export default withRouter(ShoppingCart);
