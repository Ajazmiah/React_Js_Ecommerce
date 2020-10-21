import React from 'react'

const productQuantity = (props)=>{

  return(
    <select name="quantity"onChange={(event) => {this.props.change(item.id, i,event)}} >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>

  )
}
export default productQuantity
