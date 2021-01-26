import React, {Component} from 'react'
import style from './Order.module.css'
import SingleProduct from '../../../Components/Product/singleProduct'
import Spinner from '../../../Components/UI/Loader/Loader'
import {connect} from 'react-redux'

class Orders extends Component{

render(){
    let ORDER = (<h3 style={{textAlign:'center'}}>YOU CURRENTLY HAVE NO ORDER TO SHOW</h3>)
    let spinner = <Spinner/>
    if(!this.props.OnOrderSubmitFailed){
        if(this.props.orders != null){
           let ids = []
          spinner = null
         ORDER =  this.props.orders.map(item=>{
           console.log(item.name)
           ids = ids.concat(item.order.id)
           return(
            <div className={style.Order} key={item.order.id}>
              <SingleProduct
                viewProduct={this.props.viewProduct}
                price= {item.order.Price}
                description={item.order.description}
                title={item.order.title}
                id={item.order.id}
                noImg/>
            </div>
           )
        })
      }
    }else{
      alert("THERE IS A PROBLEM WITH SUBMITING YOUR ORDER")
    }
  return(
      <div style={{background:'#000000fa', color:'white', minHeight:'100vh', padding: '2rem'}}>
        {spinner}
        <h3 style={{padding:'1rem', textAlign:'center'}}>YOUR RECENT ORDER WILL SHOW HERE</h3>
        {ORDER}
      </div>
    )
  }
}
const mapStateToProps = state=>{
  return{
    orders: state.orderReducer.orders,
    OnOrderSubmitFailed:state.orderReducer.orderSubmitFailed
  }
}

export default connect(mapStateToProps)(Orders)
