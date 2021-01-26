import React from 'react'
import {Link} from 'react-router-dom'
import {BiCartAlt} from 'react-icons/bi'
import Nav from './Nav/Nav'
import Logo from '../../Assests/img/logo.png'
import classes from './Header.module.css';
const header = (props)=>{
  return(
    <header className={classes.Header}>
      <div className={classes.logoDiv}>
        <img  className={classes.Logo}src={Logo} alt='LOGO'/>
      </div>
      <Nav />
      <div>
        <Link to="/shoppingcart">
          <BiCartAlt style={{fontSize:'1.3rem', color:'#000'}}/>
          <span className={classes.itemsSelected}>{props.itemsSelected}</span>
        </Link>

      </div>
    </header>
  )
}

export default header;
