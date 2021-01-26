import * as actionTypes from './actionTypes';
import {laptop,  phone,products} from '../../Data/Data'

export const productAdded = (id)=>{
  return{
    type: actionTypes.PRODUCT_ADDED,
    id:id
  }
}
export const productRemoved = (id)=>{
  return{
    type: actionTypes.PRODUCT_REMOVED,
    id:id
  }
}

export const clearCart = (id, event, itemPrice)=>{

  return{
    type:actionTypes.CLEAR_CART
  }
}

export const filterProduct = (category)=>{

  let renderCategory = products;
  if(category=='Laptop')
     renderCategory = laptop;
  if(category == 'Phone')
    renderCategory= phone
  return{
    type:actionTypes.FILTER_PRODUCT,
    categoryName: renderCategory
  }
}

export const searchFilter = (search)=>{

  return{
    type:actionTypes.SEARCH_FILTER,
    search: search
  }
}


export const quantityIncrease=(id,itemPrice, quantity,i)=>{
  return{
    type:actionTypes.QUANTITY_INCREASE,
    id:id,
    priceIncrease:itemPrice,
    quantity:quantity,
    index: i
  }
}

export const quantityDecrease = (id, itemPrice, quantity,i)=>{
  let type = actionTypes.QUANTITY_DECREASE;
  if(quantity <= 1)
     type= actionTypes.PRODUCT_REMOVED

  return{
    type: type,
    id: id,
    priceDecrease: itemPrice,
    quantity: quantity,
    index: i
  }
}
