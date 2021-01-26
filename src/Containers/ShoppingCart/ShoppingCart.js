import React,{Component} from 'react'
import style from './ShoppingCart.module.css'
import Indicator from './Indicator'
import CheckoutBtn from '../../Components/Product/AddToCartBtn/AddToCartBtn'
import Shop from '../../Components/Product/AddToCartBtn/AddToCartBtn'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../Store/actions/index'
import {BsTrash} from 'react-icons/bs'

class ShoppingCart extends Component{
  checkoutHandler = ()=>{
    this.props.onCartClear();
    this.props.history.push({
      pathname: '/OrderPlaced'
    })
  }
shouldComponentUpdate(nextProps, nextState){
  return nextProps.selectedItem !== this.props.selectedItem || nextProps.totalPrice !== this.props.totalPrice
}

render(){
  const selectedItem = this.props.selectedItem;
  let item;
  let checkoutDetails
  let Labels = null;
  let clearButton = null





  if(selectedItem.length > 0){
    if(this.props.totalPrice <= 0){
      this.props.onClearCart();
    }
      Labels= (<Indicator/>)
      clearButton = (<button onClick = {()=> this.props.onClearCart()} className={style.clearButton}>CLEAR CART</button>)

      item = selectedItem.map((item, i) => {

          return(
            <div key={item.id} className={style.item}>
                <li className={style.ImgDiv}>
                  <img src={item.img[0]} alt='PRODUCT' />
                </li>
                <li className={style.details}>
                  <h1 className={style.Title}>{item.title}</h1>
                  <p className={style.Price}>${item.Price.toFixed(2)}</p>
                  <p className={style.Description}>{item.description}</p>
                </li>

                <li className={style.quantity}>
                  <span onClick={()=> this.props.onQuantityDecrease(item.id,item.Price,item.quantity,i)}>-</span>
                  <span className={style.itemQuantity}>{item.quantity}</span>
                  <span onClick={()=>this.props.onQuantityIncrease(item.id,item.Price,item.quantity,i)}>+</span>
                </li>

                <li className={style.remove}>
                  <BsTrash
                    className={style.Remove}
                    onClick={()=> {this.props.onProductREMOVED(item.id)}}> Remove </BsTrash>
                </li>
              </div>)
          });
          checkoutDetails =(
              <div className={style.Total}>
                  <h3> TOTAL: ${this.props.totalPrice.toFixed(2)}</h3>
                  <CheckoutBtn background={true} clicked={this.checkoutHandler}>Checkout</CheckoutBtn>
              </div>)}
    else item=(
      <div className={style.emptyCartMessage}>
        <h1 className={style.emptyCart}>SHOPPING CART IS EMPTY</h1>
        <Link to='/products'>
            <Shop>SHOP</Shop>
        </Link>
      </div>
    )


    return(
      <div>
        <div className={style.itemsWrapper}>
          {Labels}
          {item}
          {clearButton}
        </div>
        {checkoutDetails}
      </div>)
    }
  }

const mapStateToProps = state =>{
  return{
      selectedItem: state.cartProductReducer.selectedItem,
      selectedID: state.cartProductReducer.id,
      totalPrice: state.cartProductReducer.totalPrice,
      clearCart: state.orderReducer.orderSubmited,
      orderedItem: state.orderReducer.orderedItem
    }
}

const mapDispatchToProps = dispatch =>{
  return{
    onProductREMOVED: (id)=> dispatch(actions.productRemoved(id)),
    onClearCart: ()=> dispatch(actions.clearCart()),
    onQuantityIncrease:(id,itemPrice, quantity,i)=> dispatch(actions.quantityIncrease(id,itemPrice, quantity,i)),
    onQuantityDecrease: (id, itemPrice, quantity,i)=> dispatch(actions.quantityDecrease(id, itemPrice, quantity,i)),
    onCartClear: ()=> dispatch(actions.clearCart())
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(withRouter(ShoppingCart));
