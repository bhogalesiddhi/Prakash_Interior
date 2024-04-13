import React from 'react'
import "./NewNavbar.css"

const NewNavbar = () => {
  return (
   <nav className='navbar'>
    <div className='navbar-container'>
        <div className='brand'>
            <a href='/'>Prakash Interior</a>
        </div>
        <div className='navbar-links'>
            <a href='/'>Home</a>
            <a href='/'>Services</a>
            <a href='/'>Our Work</a>
            <a href='/'>Enquiry</a>
        </div>
    </div>
   </nav>
  )
}

export default NewNavbar