// import React,{Component} from 'react'
// import FormInput from './CheckoutForm'
// import Button from '../../../Components/Product/AddToCartBtn/AddToCartBtn'
// import style from './Checkout.module.css'
//
// import {connect} from 'react-redux'
// import * as actions from '../../../Store/actions/index'
//
// class Checkout extends Component{
// 
//   state ={
//     formData:{
//       firstName:{
//         type:'text',
//         placeholder:'First Name',
//         value:''
//       },
//       lastName:{
//         type:'text',
//         placeholder:'Last Name',
//         value:''
//       },
//       email:{
//         type:'email',
//         placeholder:'Email',
//         value:''
//       },
//       street:{
//         type:'text',
//         placeholder: 'Street',
//         value:''
//       },
//       city:{
//         type:'text',
//         placeholder: 'city',
//         value:''
//       },
//       zip:{
//         type:'text',
//         placeholder: 'Zip code',
//         value:''
//       },
//       instructions:{
//         type:'textarea',
//         placeholder: "Enter Your Delivery Instructions",
//         value:''
//       },
//       nameOnCard:{
//         type:'text',
//         placeholder: 'Enter Name On Card',
//         value:''
//       },
//       cardNumber:{
//         type:'text',
//         placeholder:'Enter Card Number',
//         value:''
//       },
//       cardSecurity:{
//         type:'text',
//         placeholder:'Enter Card Security Pin',
//         value:''
//       }
//
//     }
//   }
//
// changeHandler =(event, key) =>{
//
//  let updateFormData = {...this.state.formData};
//
//
// updateFormData[key].value = event.target.value
//
// this.setState({
//   formData: updateFormData
// })
//
// let customerInfo ={
//       firstName:this.state.formData['firstName'].value,
//       lastName:this.state.formData['lastName'].value,
//       email:this.state.formData['email'].value,
//       street:this.state.formData['street'].value,
//       city:this.state.formData['city'].value,
//       zipCode:this.state.formData['zip'].value,
//       instructions:this.state.formData['instructions'].value,
//       nameOnCard:this.state.formData['nameOnCard'].value,
//       cardNumber:this.state.formData['cardNumber'].value,
//       cardSecurity:this.state.formData['cardSecurity'].value
//     }
//    console.log(customerInfo)
// }
//
// callOrderSubmit = (event)=>{
//
//   event.preventDefault()
//   this.props.OnOrderSubmitInit(this.props.selectedItem);
//
// }
//
//
// render(){
//   const INPUT= [];
//   for(let key in this.state.formData){
//       INPUT.push(key);
//   }
//
// const Orders = this.props.selectedItem.map(item =>{
//     return(
//       <div key={item.id}>
//         <br/><br/>
//         <img src={item.img} alt="PRODUCT"/>
//         <div style={{fontSize: '.6rem'}}>
//           <p>${item.Price.toFixed(2)}</p>
//           <h1>{item.title}</h1>
//           <p>{item.description}</p>
//         </div>
//       </div>
//     )
//   })
//
// return(
//     <div className={style.CheckoutWrapper}>
//       <div className={style.OrderDetails}>
//         <h3>ORDER DETAILS</h3>
//         <hr/><br/>
//         {Orders}
//         <br/>
//         <p className={style.Total}> TOTAL: ${this.props.totalPrice.toFixed(2)}</p>
//       </div>
//       <form className={style.Form} onSubmit={(event)=> this.callOrderSubmit(event)}>
//       {INPUT.map(key=>{
//         return(
//           <FormInput
//               inputtype={this.state.formData[key]['type']}
//               placeholder={this.state.formData[key]['placeholder']}
//               key={this.state.formData[key]['placeholder']}
//               value={this.state.formData[key]['value']}
//               changed={(event)=>{this.changeHandler(event, key)}}/>
//         )})}
//           <Button background='true'>PAY</Button>
//       </form>
//     </div>
//       )}}
//
//
// const mapDispatchToProps = dispatch=>{
//   return{
//     OnOrderSubmitInit:(data)=> dispatch(actions.orderSubmitInit(data))
//   }
// }
//
// const mapStateToProps = state=>{
//   return{
//     totalPrice: state.cartProductReducer.totalPrice,
//     selectedItem:state.cartProductReducer.selectedItem,
//     orderedItem: state.orderReducer.orderedItem
//   }
// }
//
// export default connect(mapStateToProps , mapDispatchToProps)(Checkout);
