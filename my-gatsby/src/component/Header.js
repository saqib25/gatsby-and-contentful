import React from 'react'
import {Link} from 'gatsby'

export default function Header(){
  return(
    <div>
    <h1>Header</h1>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">products</Link></li>


        </ul>
    </nav>
    </div>
  )
}