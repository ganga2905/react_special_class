import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className='navbar'>
        <div className='logo'>
            Sweets
        </div>

        <ul>
            <li>Home</li>
            <li>Contacts</li>
            <li className='carts'>Cart </li>
        </ul>
    </nav>
  )
}

export default Navbar