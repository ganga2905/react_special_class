import React from 'react'
import './Navbar.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = ({cartCount}) => {

  return (
    <div className='nav'>
        <div className='logo'>
            <img src={logo} alt="logo"/>
        </div>
        <nav className='navlink'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/cart'}>cart({cartCount})</Link></li>
            </ul>
        </nav>
        

    </div>
  )
}

export default Navbar