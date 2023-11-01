import React from 'react'
import './OurVision.css'
import images from '../images/istockphoto-640305394-170667a.webp'

const OurVision = () => {
  return (
    <div className='vision'> 
    <div className='vision-org'>
      <h1>Children are our Future .</h1><br></br>
      <p>Our vision at Bright Horizons Foundation is rooted in the fundamental belief that every child holds the key to our collective future. 
        We are committed to ensuring that every child, irrespective of their circumstances, is provided with the essential elements for a thriving life. 
        Children should be supported, cherished, and shielded from adversity.
        Together, we can play a vital role in shaping our children's futures by being part of a sustained mission that emphasizes not only their well-being but also education, 
        creating an environment that is conducive to learning, and offering them a place to call their own.
      </p><br></br>

      <h4>OG Tobias.</h4>
      <h6>Charirman of the House.</h6>

    </div>
    <img className='img-v' src={images} alt='Children in Class' />
    </div>
  )
}

export default OurVision
