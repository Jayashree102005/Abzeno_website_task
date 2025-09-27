import React from 'react'
import '../style/home style/Hero2.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Hero2(props) {
  return (
    <>
      <div className="cards">
        <div className="icon">< LazyLoadImage src={props.image} alt='img' effect='blur' /></div>
        <h1>{props.title1}</h1>
        <h1>{props.title2}</h1>
        <h6>{props.content}</h6>
      </div>
    </>
  )
}

export default Hero2