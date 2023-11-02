import React from 'react';
import './Homepage.css';
import Images from '../images/4 eyes for me - DR Congo -.jpeg'


const Homepage = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitle'>CHARITY AID</span>
      </div>
      <div>
      <img className='headerImg'src={Images} alt="Image link" />
      </div>
      <div>
         <h1>Helo</h1>
      </div>
    </div>
  );
};

export default Homepage;
