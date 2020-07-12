import React from 'react'
// import {Link} from 'gatsby'
import Header from './Header'
import Footer from './Footer'


export default function Layout(props){
  return(
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
  )
}