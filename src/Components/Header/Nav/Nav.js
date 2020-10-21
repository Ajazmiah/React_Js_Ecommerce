import React from 'react'
import ListItem from './ListItem/ListItem'

import style from './Nav.module.css'


const nav = (props)=>{
  return(
    <nav className={style.Nav}><ListItem/></nav>
  )
}

export default nav
