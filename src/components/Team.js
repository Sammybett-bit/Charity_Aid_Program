import React from 'react';
import Footer from './Footer'; 
import images5 from '../images/Phillpbrown I will do 3d product animation video, 3d product model, rendering for your product for $100 on fiverr_com.jpeg';
import images6 from '../images/Z5epS2Fw.jpeg';
import images7 from '../images/-bE72Mb3.jpeg';
import './Team.css';

const Team = () => {
  return (
    <div>
      <div className='team-container'>
        <div className='teamg'>
          <img src={images5} alt='sad g'></img>
          <h6>SAM</h6>
          <p>Sam is a dedicated team member who brings compassion and enthusiasm to our group.<br></br> 
          His unwavering commitment to charity work has a profound impact on our community, <br></br>
          inspiring us all to make a positive difference in the lives of others.</p>
        </div>
        <div className='teamT'>
          <img src={images7} alt='rasta kid'></img>
          <h6>TOBY</h6>
          <p>Toby is a remarkable team member whose passion for charity work is truly inspiring.<br></br>
          His tireless efforts and selflessness have made a lasting impact on our community,<br></br> 
          reminding us of the power of kindness and generosity.</p>
        </div>
        <div className='teamP'>
          <img src={images6} alt='toon'></img>
          <h6>PETER</h6>
          <p>Peter is a compassionate team member who consistently goes the extra mile in our charity endeavors. <br></br>
          His dedication and genuine commitment to helping those in need serve as a shining example for our entire team,<br>
          </br> making a significant difference in the lives of others.</p>
        </div>
      </div>
      
      <Footer /> 
    </div>
  );
}

export default Team;

