import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage:
        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}
  >
    <div className="hero-overlay"></div>
   
    <div className="hero-content text-neutral-content text-center">
      
      <div className="max-w-md">
        <h2 className='text-5xl font-bold'>Inspiration OF CODES</h2>
        <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>

      <button className='btn'>Learn More</button>
        {/* hero container */}

      </div>
    </div>
  </div>
  )
}

export default Hero
