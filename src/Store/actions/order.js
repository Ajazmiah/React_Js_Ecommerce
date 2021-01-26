import * as actionTypes from './actionTypes';
import axios from 'axios'

export const orderSubmitted = (order)=>{
  return{
    type: actionTypes.ORDER_SUBMITTED,
    order: order
  }
}
export const orderRetrieve =(orders) =>{
return{
    type: actionTypes.RETRIVE_ORDERS,
    orders:orders
    }
  }

export const orderSubmitFailed = ()=>{
  return{
    tyep: actionTypes.ORDER_SUBMIT_FAILED
  }
}



export const orderRetrieveInit = ()=>{

  let order =[]
  return dispatch =>{
    axios.get("https://buytech-e198b.firebaseio.com/orders.json")
      .then((response)=>{
        console.log(response.data)
        for(let key in response.data){
          order = order.concat(response.data[key]);
        }
        dispatch(orderRetrieve(order))
      })
      .catch(( error ) =>{
        console.log(error)
      })


  };
}

export const orderSubmitInit=(Data)=>{
  let data = []
  return dispatch =>{
    Data.forEach(item =>{
      if(item['img']){
        delete item['img']
      }
      let Orders ={
        order:item
      }
      data.push(Orders)
    })
    axios.post("https://buytech-e198b.firebaseio.com/orders.json",data)
      .then((response)=>{
        dispatch(orderSubmitted(data))

    })
  }
}
