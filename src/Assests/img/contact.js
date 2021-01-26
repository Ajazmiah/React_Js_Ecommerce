import Footer from '../footer/footer'
import Header from '../header/header'
import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layout/layout"

const contact = ()=>{


  return(
    <Layout>
      <div>
        <form>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <textarea></textarea>
          <button>SEND</button>
        </form>
        <ul>
          <li> Instagram</li>
          <li>Email></li>
        </ul>
      </div>
    </Layout>
  )
}

export default contact
