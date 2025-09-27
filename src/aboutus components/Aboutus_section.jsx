import React from 'react'
import '../style/aboutus style/Aboutus_section.css'
import logo from '../assets/aboutus imgs/logo.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Aboutus_section() {
  return (
    <>
      <div className="main-content">
        <div className="main-content1">
          <LazyLoadImage src={logo}
            alt='img'
            effect='blur' />
          <h1>ABZENO</h1>
          <h6>It’s installed on this website, give it a go!</h6>
        </div>
        <div className="main-content2">
          <h3>Great products are built alone</h3>
          <h5>We craft intuitive mobile apps for iOS and Android.
            Transforming your ideas into seamless digital experiences that drive user engagement and business growth</h5>
          <h3>Less meetings, more iteration</h3>
          <h5>We craft intuitive mobile apps for iOS and Android. Transforming your ideas into seamless digital experiences that drive user engagement and business growth</h5>
          <h3>For the modern development workflow</h3>
          <h5>We craft intuitive mobile apps for iOS and Android. Transforming your ideas into seamless digital experiences that drive user engagement and business growth</h5>
        </div>
      </div>
    </>
  )
}

export default Aboutus_section