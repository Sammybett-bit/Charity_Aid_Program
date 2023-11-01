import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <ul className='list'>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/Project">Project</Link></li>
          <li><Link to ="/Team">Team</Link></li>
          <li><Link to ="/Blog">Blog</Link></li>
          <li><Link to ="/Login">Login</Link></li>
          <li><Link to ="/Signin">Signin</Link></li>
          </ul>
        <ul>
          <button className='btn-donar'>Donate</button>
        </ul>
    
      </div>
      
    </div>
  )
}

export default Navbar
