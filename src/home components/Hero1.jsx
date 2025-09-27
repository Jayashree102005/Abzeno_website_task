import React from 'react'
import '../style/home style/Hero1.css'
import flutter from '../assets/home imgs/flutter.jpg'
import figma from '../assets/home imgs/figma.jpg'
import react from '../assets/home imgs/react.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Hero1() {
    return (
        <>
            <div className="hero1">
                <h6>expertise in:</h6>
                <div className="hero1content">
                    <div className="row">
                        <div className="col-3">
                            <LazyLoadImage
                                src={flutter}
                                effect='blur' /> Flutter
                        </div>
                        <div className="col-1">
                            <span className="vertical"></span>
                        </div>
                        <div className="col-3">
                            <LazyLoadImage
                                src={figma}
                                effect='blur' /> Figma
                        </div>
                        <div className="col-1">
                            <span className="vertical"></span>
                        </div>
                        <div className="col-3">
                            <LazyLoadImage
                                src={react}
                                effect='blur' />React JS
                        </div>
                    </div>
                </div>













                {/* <div className="hero1contentmedia">
                        <div className="text1">
                            <LazyLoadImage
                                src={flutter}
                                effect='blur' /> Flutter
                        </div>
                        <div className="verline1">
                        </div>
                        <div className="text2">
                            <LazyLoadImage
                                src={figma}
                                effect='blur' /> Figma
                        </div>
                        <div className="verline1">
                        </div>
                        <div className="text3">
                            <LazyLoadImage
                                src={react}
                                effect='blur' /> React JS
                        </div>
                    </div> */}
            </div>
        </>
    )
}

export default Hero1