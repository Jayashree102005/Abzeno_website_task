import React from 'react'
import '../style/contact style/Contactus.css'
import '../decoration/Contact decoration.css'
function Contactus() {
    return (
        <>
            <div id='contact'>
                <div className="header">
                    <h2>CONTACT INFO</h2>
                </div>
                <div className="paras">
                    <div className="para1">
                        <h4>VISIT US</h4>
                        <h5>Come here and say hello to our office HQ.</h5>
                        <h6>Karayanchavadi, Poonamalle,</h6>
                        <h6>chennai -600056.</h6>
                    </div>
                    <div className="para2">
                        <h4>CHAT TO US</h4>
                        <h5>Our friendly team is there to help.</h5>
                        <h6><a href='#'>communication@abzeno.org</a></h6>
                    </div>
                    <div className="para3">
                        <h4>CALL US</h4>
                        <h5>MONDAY TO FRIDAY 9AM TO 5PM</h5>
                        <h6>+91 76390 66251</h6>
                    </div>
                    <div className="para4">
                        <h4>SOCIAL MEDIA</h4>
                        <h5>follow us through social media</h5>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-twitter"></i></li>
                        <li><i className="bi bi-linkedin"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contactus