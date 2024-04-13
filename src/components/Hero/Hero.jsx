import React from 'react'
import "./Hero.css"
import NewNavbar from '../NewNavbar/NewNavbar'


const Hero = () => {
  return (
    <div className='main'>
      <div className='nav'>
      <NewNavbar/>
      </div>
     
    <div className='mainContainer'>
        <div className='leftSide'>
        <div className='quoteSection '>
            <div className='quoteSection1 quote quote1'>
            <span>ELEGANT</span>
            <span>INTERIORS</span>
            </div>
            <div className='quoteSection2'>
              <span>Discover bespoke interior designs that blend elegance with practicality</span>
              <span>tailored to enhance the vibrancy and comfort </span>
              <span>of modern city living.</span>
            </div>
        </div>
        </div>
        <div className='rightSide'>
            <div className='rightsideimg'>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero