import React from 'react'
import logo from '../assets/footer imgs/abzeno logo.jpg'
import line from '../assets/footer imgs/line.jpg'
import '../Footer/Footer.css'
import '../responsive/Footer responsive.css'
import '../decoration/Footer decoration.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Footer() {
  return (
    <div id='footer'>
      <div className="image1">
        <LazyLoadImage
          src={line} />
      </div>
      <div className="containers">
        <div className="container1">
          <LazyLoadImage
            src={logo}
            alt='img'
            effect='blur' />
        </div>
        <div className="container2">
          <h6 className='h6'><i className="bi bi-geo-alt-fill"></i> DDR Nagar, Poonamalle - 600056</h6>
          <div className="icons">
            <ul>
              <li><i className="bi bi-telephone-fill"></i> +91 7639066251</li>
              <li><i className="bi bi-envelope-fill"></i> communication@abzeno.org</li>
            </ul>
          </div>
          <ul>
            <li>Social Media</li>
            <li><i className="bi bi-facebook"></i></li>
            <li><i className="bi bi-twitter"></i></li>
            <li><i className="bi bi-linkedin"></i></li>
            <li><i className="bi bi-instagram"></i></li>
          </ul>
        </div>
      </div>
      <div className="image2">
        <LazyLoadImage
          src={line} />
      </div>
      <div className="footernav">
        <ul>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>HELP</li>
          <li>PRIVACY POLICY</li>
          <li>DISCLAIMER</li>
          <span className="text"><li>Copyright <i className="bi bi-c-circle"></i> 2015 . abzeno</li></span>
        </ul>
      </div>
    </div>
  )
}

export default Footer