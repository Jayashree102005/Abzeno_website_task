import React from 'react'
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css'
import '../decoration/Navbar decoration.css'
import '../responsive/Navbar responsive.css'
function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-md">
        <button className="navbar-toggler" data-bs-target="#links" data-bs-toggle='collapse'>
          <i className="bi bi-list"></i>
        </button>
        <div id='links' className='collapse navbar-collapse'>
          <div className="nav">
            <ul>
              <li> <Link to={'/'}><h1>ABZENO</h1></Link></li>
              <span className='center'>  <li><Link to={'/Aboutus'}><p>ABOUT US </p></Link></li>
                <li><Link to={'/Service'}><p>PRODUCT & SERVICES</p></Link></li>
                <li><p>CAREER</p></li>
                <li><Link to={'/Contact'}><button type="submit">REACH US</button></Link></li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar