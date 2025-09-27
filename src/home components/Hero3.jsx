import React from 'react'
import '../style/home style/Hero3.css'
import logo from '../assets/home imgs/logo.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Hero3() {
  return (
    <>
      <div className="maincontent text-center">
        <div className="col-1.5">
          <div className="sidetext">
            <h1>ABZENO</h1>
            <h6>BRANDING AND WEBSITE</h6>
            <h6>DESIGN <br />AT ABZENO</h6>
          </div>
        </div>
        <div className="col-3">
          <div className="logoimg">
            <LazyLoadImage
              src={logo}
              alt='img'
              effect='blur' />
          </div>
        </div>
        <div className="col-7">
          <div className="centertext">
            <h1>
              BRANDING <span className='greytext'>AND</span> CREATING YOUR DREAMS <span className='greytext'>WITH</span> ABZENO
            </h1>
            <div className="line"></div>
            <h6>ABZENO empowers brands with innovative UI/UX, &nbsp;&nbsp;&nbsp;digital marketing, &nbsp;&nbsp;&nbsp;app, &nbsp;&nbsp;&nbsp;and development - transforming ideas into reality with creativity and precision.</h6>
          </div>
        </div>
      </div>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </>
  )
}

export default Hero3