import * as actionTypes from '../actions/actionTypes'
import {products} from '../../Data/Data'
import {laptop,  phone} from '../../Data/Data'

const initialState={
  product: products,
  selectedItem: [],
  id:[],
  totalPrice:0,
  display:''
}

///////////========PRODUCT_ADDED=========////////////////
const productAdded = (state, action)=>{
  let cartItems =[...state.selectedItem];
  let selectedID = [...state.id];
  let totalPrice;

  if(state.id.indexOf(action.id)=== -1){
    state.product.forEach((item, i)=>{
      if(item.id=== action.id){
          cartItems  = cartItems.concat(item)
          selectedID =  selectedID.concat(action.id)
          totalPrice = item.Price
        }})

      }
      else{
        alert('ITEM IS ALREADY IN THE CART')
        return state
      }
  return{
    ...state,
    selectedItem: cartItems,
    totalPrice: state.totalPrice + totalPrice,
    id: selectedID
  }
}

///////=========PRODUCT_REMOVED==========////////////
const productRemoved= (state, action)=>{
  let ItemsOnCart =[...state.selectedItem];
  let ID = [...state.id];
  let TotalPrice;

  ItemsOnCart.forEach((item, i)=>{
    if(item.id ===action.id){
      ItemsOnCart.splice(i, 1);
      ID.splice(i,1);
      TotalPrice = item.Price
    }
  })

  return{
    ...state,
    selectedItem: ItemsOnCart,
    id:ID,
    totalPrice: state.totalPrice - TotalPrice
  }
}

const clearCart = (state, action)=>{
  return{
    ...state,
    selectedItem:[],
    id:[],
    totalPrice:0
  }
}

//-Product Increase in CART
const quantityIncrease = (state, action)=>{

  let items = [...state.selectedItem];
  let item = {...items[action.index]};
  items[action.index] = {
    ...item,
    quantity: action.quantity + 1
  }
  return{
    ...state,
    totalPrice: state.totalPrice + action.priceIncrease,
    selectedItem:items
  }
}
//-Product Decrease in CART
const quantityDecrease = (state, action)=>{

  let items = [...state.selectedItem];
  let item = {...items[action.index]};

  items[action.index] = {
    ...item,
    quantity: action.quantity - 1
  }
  return{
    ...state,
    totalPrice: state.totalPrice - action.priceDecrease,
    selectedItem:items
  }
}
const filterProduct = (state, action)=>{
  let category = action.categoryName
  return{
    ...state,
    product:category
  }
}
//----DISPLAY IMAGE-------//
const displayImage = (state,action)=>{
  return{
    ...state,
    display: action.imgURL
  }
}

//search Filter
const searchFilter = (state,action)=>{
  console.log("CALLED")
  let input = action.search.toUpperCase();
  let filterProduct =  state.product;

  state.product.forEach((product,i) => {

  if(product.title.toUpperCase().indexOf(input) !== -1 ){
    filterProduct = [...state.product].splice(i,1);
  }
})

  return{
    ...state,
    product: filterProduct
  }
}
const cartProductReducer =(state=initialState, action)=>{
  switch (action.type) {
    case(actionTypes.PRODUCT_ADDED):return productAdded(state,action);
    case(actionTypes.PRODUCT_REMOVED):return productRemoved(state, action);
    case(actionTypes.CLEAR_CART):return clearCart(state,action);
    case(actionTypes.QUANTITY_INCREASE):return quantityIncrease(state, action);
    case(actionTypes.QUANTITY_DECREASE): return quantityDecrease(state, action)
    case(actionTypes.SEARCH_FILTER): return searchFilter(state,action)
    case(actionTypes.FILTER_PRODUCT):return filterProduct(state,action);
    case(actionTypes.MAIN_IMAGE_DISPLAY):return displayImage(state,action)
  }
    return state
}

export default cartProductReducer;
