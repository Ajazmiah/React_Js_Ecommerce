import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav/Nav'
import classes from './Header.module.css';
const header = (props)=>{
  return(
    <header className={classes.Header}>
      <h1>logo</h1>
      <Nav />
      <div style={{flex: '0 0 20%', display:'flex', alignItems: 'center'}}>
        <Link to="/shoppingcart">Cart</Link>
        <span className={classes.itemsSelected}>{props.itemsSelected}</span>
      </div>
    </header>
  )
}

export default header;
