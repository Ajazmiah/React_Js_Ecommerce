import React from 'react'
import style from './Checkout.module.css'
import ReactAux from '../../../hoc/ReactAux'


const CheckoutForm = (props)=>{
  let inputElement = null;

  switch (props.inputtype) {
    case ('email'):
      inputElement = <input
                        type={props.inputtype}
                        placeholder={props.placeholder}
                        value={props.value}
                        className={style.inputText}
                        onChange={props.changed} />;
                        break;
    case('textarea'):
      inputElement= <textarea
                      placeholder={props.placeholder}
                      onChange={props.changed}
                      value={props.value}
                      type={props.inputtype}/>
                      break;
    default:
      inputElement= <input
                      type={props.inputtype}
                      placeholder={props.placeholder}
                      value={props.value}
                      onChange={props.changed}
                      className={style.inputTextarea}/>
                      break;
                    }
    return(
      <ReactAux>
          {inputElement}
      </ReactAux>
     )
}

export default CheckoutForm
