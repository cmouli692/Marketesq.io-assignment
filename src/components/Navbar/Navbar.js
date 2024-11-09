import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-bar-container'>
        <p>Brisphere</p>
        <ul className='nav-bar-controls-container'>
        <li>Discover</li>
        <li>Services</li>
        <li>About Us</li>
        </ul>
      
    </div>
  )
}

export default Navbar
