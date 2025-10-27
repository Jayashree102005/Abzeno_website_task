import React from 'react'
import Navbar from '../Navbar/Navbar'
import Service_section1 from './Service_section1'
import '../decoration/Service decoration.css'
import Meet_abzeno from '../aboutus components/Meet_abzeno'
import Service_section2 from './Service_section2'
import Service_section3 from './Service_section3'
import Service_section4 from './Service_section4'
import Footer from '../Footer/Footer'
import icons1 from '../assets/service imgs/icons1.jpg'
import icons2 from '../assets/service imgs/icons2.jpg'
import icons3 from '../assets/service imgs/icons3.jpg'
import '../responsive/Service responsive.css'
function Service() {
  return (
    <>
      <Navbar />
      <Service_section1 />
      <Meet_abzeno />
      <div className="Service_section2">
      <h5># Our Services</h5>
      <h1>Services We Provide to <span className='bluetext'> Elevate Your Business </span></h1>
      </div>
      <div className="service_sectioncards">
      <Service_section2 image={icons1} title="WEBSITE DEVELOPMENT" content="Crafting a content strategy that includes text, images, maps, videos, and 
       other graphics to communicate with your audience."  link=" Learn more "
      />
      <Service_section2 image={icons2} title="MOBILE APP DEVELOPMENT" content="Crafting a content strategy that includes text, images, maps, videos, and 
       other graphics to communicate with your audience."  link=" Learn more "/>
       <Service_section2 image={icons3} title="UI/UX DESIGN" content="Crafting a content strategy that includes text, images, maps, videos, and 
       other graphics to communicate with your audience."  link=" Learn more "/>
       </div>
       <Service_section3/>
       <Service_section4/>
       <Footer/>
    </>
  )
}

export default Service