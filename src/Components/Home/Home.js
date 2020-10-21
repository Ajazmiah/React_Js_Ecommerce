import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import style from './Home.module.css'

class Home extends Component{



  render(){
    return(
      <div className={style.HomeWrapper}>
        <div className={style.Content}>
          <h1> Quality Products with lowest of prices than anywhere else</h1>

          <p>Check out our latest releases</p>
          <Link to='/products'><button className={style.viewProducts}> View Products </button></Link>

        </div>

      </div>
    )
  }
}

export default Home
