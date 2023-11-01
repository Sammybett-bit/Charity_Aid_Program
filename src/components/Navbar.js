import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  const [actveLink, setActiveLink] = useState('Home')

  const handleLinkClick = (name) => {
    setActiveLink(name);
  }
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <h3>CHARITY</h3>
        <ul className='list'>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/OurVision">Our vision</Link></li>
          <li><Link to ="/Team">Team</Link></li>
          <li><Link to ="/Blog">Blog</Link></li>
          <li><Link to ="/Login">Login</Link></li>
          <li><Link to ="/Signup">Signup</Link></li>
          </ul>
        <ul>
          <button className='btn-donar'>Donate</button>
        </ul>
    
      </div>
      
    </div>
  )
}

export default Navbar
