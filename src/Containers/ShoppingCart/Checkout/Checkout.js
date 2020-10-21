import React,{Component} from 'react'
import FormInput from './CheckoutForm'
import Button from '../../../Components/Product/AddToCartBtn/AddToCartBtn'
import style from './Checkout.module.css'

class Checkout extends Component{

  state ={

    formData:{

      firstName:{
        type:'text',
        placeholder:'First Name',
        value:''
      },
      lastName:{
        type:'text',
        placeholder:'Last Name',
        value:''
      },
      email:{
        type:'email',
        placeholder:'Email',
        value:''
      },
      street:{
        type:'text',
        placeholder: 'Street',
        value:''
      },
      city:{
        type:'text',
        placeholder: 'city',
        value:''
      },
      zip:{
        type:'text',
        placeholder: 'Zip code',
        value:''
      },
      instructions:{
        type:'textarea',
        placeholder: "Enter Your Delivery Instructions",
        value:''
      },
      paymentInfoCardName:{
        type:'text',
        placeholder: 'Enter Name On Card',
        value:''
      },
      paymentInfoCardNumber:{
        type:'text',
        placeholder:'Enter Card Number',
        value:''
      },
      paymentInfoCardSecurityr:{
        type:'text',
        placeholder:'Enter Card Security Pin',
        value:''
      }

    }
  }

changeHandler =(event, key) =>{

 let updateFormData = {...this.state.formData};
 let updatedElement = {...updateFormData[key]}
 updatedElement['value'] = event.target.value
 updateFormData[key] = updatedElement;

 this.setState({
   formData: updateFormData
 })
}


render(){
  const INPUT= [];
  for(let key in this.state.formData){
      INPUT.push(key);
  }

  const Orders = this.props.selectedItem.map(item =>{
    return(
      <div key={item.id}>
        <img src={item.img}/>
        <div style={{fontSize: '.6rem'}}>
          <p>${item.Price.toFixed(2)}</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      </div>
    )
  })

return(
    <div className={style.CheckoutWrapper}>
      <div className={style.OrderDetails}>
        <h3>ORDER DETAILS</h3>
        <hr/><br/>
        {Orders}
        <br/>
        <p className={style.Total}> TOTAL: ${this.props.totalPrice.toFixed(2)}</p>
      </div>
      <form className={style.Form} onSubmit={this.props.clicked}>
      {INPUT.map(key=>{
        return(
          <FormInput
              inputtype={this.state.formData[key]['type']}
              placeholder={this.state.formData[key]['placeholder']}
              key={this.state.formData[key]['placeholder']}
              value={this.state.formData[key]['value']}
              changed={(event)=>{this.changeHandler(event, key)}}
               />
        )
      })}

      <Button background='true'>PAY</Button>
      </form>
    </div>
      )
    }
  }
export default Checkout;
