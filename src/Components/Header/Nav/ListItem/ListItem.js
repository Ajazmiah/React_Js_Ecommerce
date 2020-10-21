import React from 'react'
import {NavLink} from 'react-router-dom'

import ReactAux from '../../../../hoc/ReactAux'
import style from './ListItem.module.css'

const listItem = (props)=>{
  return(

    <ReactAux>
      <li className={style.ListItem}><NavLink  to='/' exact activeStyle={{ color: 'orange' }}>Home</NavLink></li>
      <li className={style.ListItem}><NavLink to='/products' activeStyle={{ color: 'orange' }}>products</NavLink> </li>
    </ReactAux>


  )
}

export default listItem;
