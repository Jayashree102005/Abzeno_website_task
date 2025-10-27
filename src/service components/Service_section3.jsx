import React from 'react'
import '../style/service style/Service_section3.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ball1 from '../assets/service imgs/ball1.jpg'
import ball4 from '../assets/service imgs/ball2.jpg'
import ball3 from '../assets/service imgs/ball3.jpg'
import ball2 from '../assets/service imgs/ball4.jpg'
function Service_section3() {
  return (
    <>
    <div className="service-section3">
        <h5># Our Work Process</h5>
        <h1>Our Proven <span className='bluetext'>Work Process</span></h1>
    <div className="workprocess">
        <div className="ball1">
        <LazyLoadImage src={ball1} alt='img' effect='blur'/>
        <h1>Consultation</h1>
        <h5>Crafting a content strategy that includes text, images, maps, videos, and other graphics to communicate with your audience.</h5>
        </div>
        <div className="midline1">         
        </div>
        <div className="ball2">
        <LazyLoadImage src={ball2} alt='img' effect='blur'/>
        <h1>Strategy</h1>
        <h5>Crafting a content strategy that includes text, images, maps, videos, and other graphics to communicate with your audience.</h5>
        </div>
        <div className="midline2">         
        </div>
        <div className="ball3">
        <LazyLoadImage src={ball3} alt='img' effect='blur'/>
        <h1>Implementation</h1>
        <h5>Crafting a content strategy that includes text, images, maps, videos, and other graphics to communicate with your audience.</h5>
        </div>
        <div className="midline3">         
        </div>
        <div className="ball4">
        <LazyLoadImage src={ball4} alt='img' effect='blur'/>
        <h1>Final Result</h1>
        <h5>Crafting a content strategy that includes text, images, maps, videos, and other graphics to communicate with your audience.</h5>
        </div>
    </div>
    </div>
    </>
  )
}

export default Service_section3