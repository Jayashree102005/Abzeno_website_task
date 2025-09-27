import React from 'react'
import '../style/aboutus style/Hero_section1.css'
function Hero_section() {
    return (
        <>
            <div class="hero-section1">
                <div class="float-text designer">
                    <h5>Designer </h5> <i className="bi bi-chat-dots-fill icon-mirror"></i>
                    <div className="lines">
                        <div className="styledline1"></div>
                        <div className="styledline2"></div>
                        <div className="styledline3"></div>
                        <div className="styledline4"></div>
                        <div className="styledline5"></div>
                    </div>
                </div>
                <div class="float-text design-engineer">
                    <i className="bi bi-chat-dots-fill"></i> <h5> Design engineer</h5></div>
                <div className="lines">
                    <div className="lines2">
                        <div className="styledline6"></div>
                        <div className="styledline7"></div>
                    </div>
                </div>
                <div class="float-text product-manager">
                    <h5> Product manager </h5><i className="bi bi-chat-dots-fill icon-mirror"></i>
                    <div className="lines">
                        <div className="styledline8"></div>
                        <div className="styledline9"></div>
                        <div className="styledline10"></div>
                    </div>
                </div>
                <div class="float-text product-engineer">
                    <i className="bi bi-chat-dots-fill"></i> <h5> Product engineer</h5>
                </div>
                <div class="hero-content1">
                    <h1>BUILD SOFTWARE TOGETHER</h1>
                    <h6>The quickest way to collaborate on staging and ephemeral environments.</h6>
                    <div className="form-section">
                        <form class="email-form">
                            <input type="email" placeholder="Email" />
                        </form>
                        <button type="submit">Join the waitlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero_section