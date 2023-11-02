import React from 'react';
import './Homepage.css';
import Footer from './Footer';
import Images from '../images/4 eyes for me - DR Congo -.jpeg';
import Images2 from '../images/Why food charity is failing the poor MiNDFOOD.jpeg';
import Images3 from '../images/93b29ddf5b03dd96f036413114c3f8e9.jpg'
import Images4 from '../images/September is Blog Month at Compassion.jpeg'

const Homepage = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
      </div>
      <div className='imageContainer'>
        <div className='imageText'>Supporting Hope</div>
        <img className='headerImg' src={Images} alt="Image link" />
        <div className='charityDescription'>
          <p>
            Welcome to Charity Aid, where we are dedicated to making a difference
            in the lives of those in need. Our mission is to bring hope, relief, and
            support to communities around the world. Join us in our journey to
            create a brighter future for all.
          </p>
        </div>
        <div className='imageDiv1'>
          <img src={Images2} alt="hands" />
          
          <p>
          Supporting children in need with your generosity brings hope and brighter futures.
           Your small acts of charity make a big difference in their lives. Thank you for making their dreams come true.
          </p>
          <h4>With gratitude,</h4>
          <h6>MAXWELL Henry</h6>
        </div>
        <div className='imageDiv2'>
        <img src={Images3} alt="happy children" />
        <p>"Your donations bring unbridled happiness to children's lives.
           Every gift, no matter how small, lights up their world with laughter and hope. 
           Your generosity nurtures their dreams and fills their hearts with joy. 
           Together, we create a brighter, happier future for the youngest members of our community."</p>
           <h4>Happiness</h4>
           <h6>Sammy Kings</h6>
        </div>
        <div className='imageDiv3'>
        <img src={Images4} alt="humble kid" />
        <p>"Children's prayers in charity are like whispers of hope. 
          With innocence and gratitude, they ask for blessings not just for themselves, but for the world. 
          In their sincerity, they inspire us to give with an open heart, 
          knowing that our acts of kindness can answer their heartfelt wishes."</p>
          <h4>Prayers</h4>
          <h6>Fr. Peter Sila</h6>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
