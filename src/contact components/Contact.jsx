import React from 'react'
import Navbar from '../Navbar/Navbar'
import Content1 from './Content1'
import Contactus from './Contactus'
import Form from './Form'
import Footer from '../Footer/Footer'
import Accordion from './Accordion'
import '../style/contact style/Contact.css'
import '../responsive/Contact responsive.css'
function contact() {
  return (
    <>
      <Navbar />
      <Content1 />
      <div className="section">
        <div className="section1">
          <Contactus />
        </div>
        <div className="section2">
          <Form />
        </div>
      </div>
      <Accordion />
      <Footer />
    </>
  )
}

export default contact