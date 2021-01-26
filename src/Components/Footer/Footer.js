import React from 'react';
import Logo from '../../Assests/img/logo.png'
import classes from './Footer.module.css';
const footer = ()=>(

  <div className={classes.Footer}>
    <div className={classes.logoDiv}>
      <img  className={classes.Logo}src={Logo} alt='LOGO'/>
    </div>
    <p>All Rights Reserved &copy; 2021 </p>
  </div>
)
export default footer
