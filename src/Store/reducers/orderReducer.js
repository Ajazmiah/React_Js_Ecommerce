import * as actionTypes from '../actions/actionTypes'

const initialState={
  orderSubmited: false,
  disableBtn: false,
  orderedItem: [],
  orders: null,
  orderSubmitFailed: false
}

/////////////////////============ORDER SUBMITED==============///////////////////
const orderSubmited = (state, action)=>{
  return{
    ...state,
    orderSubmited: true,
    orderedItem: action.order,
    orderSubmitFailed:false
  }
}
//////////=========RETRIVE_ORDERS============////////////////
const retriveOrders = (state, action)=>{
  return{
    ...state,
    orders: action.orders
  }
}

/////////=========ORDER_SUBMIT_FAILED=====/////////////
const orderSubmitFailed = (state, action)=>{
  return{
    ...state,
    orderSubmitFailed:true
  }
}
////////////=====/SWITCH STATEMENT=======/////////////
const orderReducer = (state=initialState, action)=>{
  switch(action.type){
    case(actionTypes.ORDER_SUBMITTED): return orderSubmited(state, action);
    case(actionTypes.RETRIVE_ORDERS):  return retriveOrders(state,action);
    case(actionTypes.ORDER_SUBMIT_FAILED): return orderSubmitFailed(state, action)

  }
  return state
}
export default orderReducer;
