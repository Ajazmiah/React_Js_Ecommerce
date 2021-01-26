import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import classes from './Home.module.css'
import PhoneImg from '../../Assests/img/landingpageimg/galaxy20.jpg'
import '../../main.css';

class Home extends Component{

  render(){
    return(
      <div className={`${classes.HomeWrapper} Wrapper`}>
        <div className={classes.showCaseText}>
          <h1 className={classes.TechShop}>Tech-Shop</h1>
          <p className={classes.Slogan}>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque nisl eros,
              pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus.
              Donec scelerisquesollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
              in pretium orci vestibulum eget. Class aptent taciti sociosqu
              ad litora torquentper conubia nostra, per inceptos himenaeos.
          </p>
          <Link to='/products'>
            <button
              className={classes.viewProducts}>shop now
            </button></Link>
        </div>

        <div className={classes.ImgesDiv}>
          <img src={PhoneImg} className={classes.Phone} alt="galaxy 20 phone"/>

  
        </div>

      </div>
    )
  }
}

export default Home
