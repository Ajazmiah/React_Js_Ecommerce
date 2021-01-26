import React from 'react'
import {NavLink} from 'react-router-dom'

import ReactAux from '../../../../hoc/ReactAux'
import style from './ListItem.module.css'

const listItem = (props)=>{
  return(
   <ReactAux>
      <li className={style.ListItem}><NavLink  to='/' exact activeStyle={{ color: 'orange' }}>HOME</NavLink></li>
      <li className={style.ListItem}><NavLink to='/products' activeStyle={{ color: 'orange' }}>PRODUCTS</NavLink> </li>
   </ReactAux>
 )
}
  // <li className={style.ListItem}><NavLink to='/orders' activeStyle={{ color: 'orange' }}>ORDERS</NavLink> </li>
export default listItem;
