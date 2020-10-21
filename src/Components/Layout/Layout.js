import React from 'react'

import style from './Layout.module.css'

const layout = (props)=>{
  return(
    <div>

        <main className={style.Main}>
          {props.children}
        </main>

    </div>
  )
}

export default layout;
