import React from 'react'
import '../style/aboutus style/Showcase_cards.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Showcase_cards(props) {
  return (
    <>
      <div className="showcase-cards">
        <h1>{props.title1}</h1>
        <h6>{props.content}</h6>
        <LazyLoadImage src={props.image}
          alt='img'
          effect='blur' />
      </div>
    </>
  )
}

export default Showcase_cards