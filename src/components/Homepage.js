import React from 'react';
import './Homepage.css';
import Images from '../images/93b29ddf5b03dd96f036413114c3f8e9.jpg'

const Homepage = () => {
  return (
    <div>
      <div className="image-pic">
        <a href="/image.png">
          <img src={Images} alt="Image link" />
        </a>
      </div>
    </div>
  );
};

export default Homepage;
