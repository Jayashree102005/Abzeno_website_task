import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../style/home style/Home.css'
import '../decoration/Home decoration.css'
import Header from './Header'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import card1 from '../assets/home imgs/card1.jpg'
import card2 from '../assets/home imgs/card2.jpg'
import card3 from '../assets/home imgs/card3.jpg'
import Hero3 from './Hero3'
import '../responsive/Home responsive.css'
function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero1 />
      <div className="title">
        <h1>OUR SERVICE</h1>
      </div>
      <div className="herocards">
        <Hero2 image={card1} title1="MOBILE APP" title2="DEVELOPMENT" content="We craft intuitive mobile apps for iOS and Android. 
      Transforming your ideas into seamless digital experiences that drive user engagement and business growth"
        />
        <Hero2 image={card2} title1="WEBSITE" title2="DEVELOPEMENT" content="We build stunning, responsive websites that captivate your audience.
       Our expert team delivers solutions, ensuring a seamless online experience "/>
        <Hero2 image={card3} title1="UI/UX" title2="DESIGNING" content="We craft intuitive and engaging user experiences. 
      Our UI/UX design focuses on seamless navigation and visually appealing interfaces, driving user satisfaction"/>
      </div>
      <Hero3 />
      <Footer />
    </>
  )
}

export default Home