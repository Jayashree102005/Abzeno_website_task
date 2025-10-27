import React from 'react'
import '../style/service style/Service_section1.css'
import logo from '../assets/service imgs/logo.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Service_section1() {
  return (
    <>
      <div className="service_sections text-center">
        <div className="col-6">
          <div className="section1text">
            <h5># Experience The Best IT Solutions</h5>
            <h1>Where Creativity Meets <span className='bluetext'>ABZENO</span> Technology </h1>
            <h4>Empowering businesses and individuals with cutting-edge technology solutions, TechConnect 
              connects you to the latest innovations, seamless integrations, and expert support.</h4>
            <div className="service_button">
            <button type='submit'>GET STARTED</button>
            <h5>View All Services</h5>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="serviceimg">
            <LazyLoadImage src={logo} alt='img' effect='blur'/>
          </div>
        </div>
        <div className="col-3">
          <div className="service_sidetext">
            <h1>ABZENO</h1>
            <h6>BRANDING AND WEBSITE</h6>
            <h6>DESIGN <br />AT ABZENO</h6>
          </div>
        </div>
      </div>
    </>
  )
}


export default Service_section1