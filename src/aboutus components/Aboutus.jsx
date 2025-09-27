import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../style/aboutus style/Aboutus.css'
import Hero_section from './Hero_section'
import '../decoration/Aboutus decoration.css'
import Meet_abzeno from './Meet_abzeno'
import Showcase_cards from './Showcase_cards'
import arrow from '../assets/aboutus imgs/arrow.jpg'
import Success from './Success'
import Aboutus_section from './Aboutus_section'
import '../responsive/Aboutus responsive.css'
function Aboutus() {
  return (
    <>
      <Navbar />
      <Hero_section />
      <Meet_abzeno />
      <div className="showcase-title">
        <h4>#Our Latest Projects</h4>
        <h1>Explore Our Showcase of Featured Works</h1>
      </div>
      <div className="showcase">
        <Showcase_cards title1="WEB&nbsp;&nbsp;&nbsp;&nbsp; DESIGN" content="Crafting a content strategy that includes text, images, maps, videos, 
      and other graphics to communicate with your audience." image={arrow} />
        <Showcase_cards title1="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GITHUB" content="Crafting a content strategy that includes text, images, maps, videos, 
      and other graphics to communicate with your audience." image={arrow} />
        <Showcase_cards title1="UI/UX DESIGNING" content="Crafting a content strategy that includes text, images, maps, videos, 
      and other graphics to communicate with your audience." image={arrow} />
        <Showcase_cards title1="WEBSITE DEVELOPMENT" content="Crafting a content strategy that includes text, images, maps, videos, 
      and other graphics to communicate with your audience." image={arrow} />
        <Showcase_cards title1="MOBILE APP DEVELOPMENT" content="Crafting a content strategy that includes text, images, maps, videos, 
      and other graphics to communicate with your audience." image={arrow} />
        <a href="#">View More</a>
      </div>
      <Success />
      <Aboutus_section />
      <Footer />
    </>
  )
}

export default Aboutus