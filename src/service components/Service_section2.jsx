import React from 'react'
import '../style/service style/Service_section2.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Service_section2(props) {
  return (
   <>
   <div className="service_cards">
     <div className="img_icons">< LazyLoadImage src={props.image} alt='img' effect='blur' /></div>
            <h1>{props.title}</h1>
            <h4>{props.content}</h4>
            <h5>{props.link}</h5>
     </div>
   </>
  )
}

export default Service_section2