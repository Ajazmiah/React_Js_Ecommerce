import React, { Component} from 'react';
import {IoIosAddCircle} from 'react-icons/io'



class SingleProduct extends Component{
  render(){
    const style ={
      textAlign:'right',
      fontSize: '1.5rem',
      color:'#e64a19c7'
    }

    let img = null
    if(!this.props.noImg){
      img =(<img src={this.props.img[0]} alt="PRODUCT" onClick={()=>{this.props.viewProduct(this.props.id, this.props.img[0])}}/>);
    }


    return(
     <div>
          {img}
          <ul>
            <li>${this.props.price.toFixed(2)}</li>
            <li><h3>{this.props.title}</h3></li>
            <li><p>{this.props.description}</p></li>
            <li style={style} onClick={()=>{this.props.clicked(this.props.id)}}><IoIosAddCircle/></li>
          </ul>
      </div>
    )}
  }


export default SingleProduct
