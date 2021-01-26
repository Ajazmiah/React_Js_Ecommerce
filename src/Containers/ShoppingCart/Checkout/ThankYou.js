import React,{Component} from 'react'


class ThankYou extends Component{


render(){
  const style={
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    flexFlow:'column',
    height:'92vh',
    fontSize:'2rem'}
  return(
    <div style={style}>
      <h3> Your Order Has Been Placed</h3>
      <p> Thank You For Shopping With Us</p>
    </div>)

  }
}
export default ThankYou;
