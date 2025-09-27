import React from 'react'
import '../style/contact style/Form.css'
import '../decoration/Contact decoration.css'
function Form() {
  return (
    <>
      <div className="container">
        <form>
          <h1 className="mobiletext">REACH US</h1>
          <div className="row">
            <div className="col">
              <label>First Name*</label>
              <input type='text' placeholder='Enter your first name' name='firstname' id='firstname' required />
            </div>
            <div className="col">
              <label>Last Name*</label>
              <input type='text' placeholder='Enter your last name' name='lastname' id='lastname' required />
            </div>
          </div>
          <label>Company Name (Optional)</label>
          <input type='text' placeholder='Enter your company name' name='company' id='companyname' required />
          <label>E-mail*</label>
          <input type='email' placeholder='Enter your e-mail address' name='email' id='email' required />
          <label>Phone Number*</label>
          <input type='text' placeholder='+91 00000 00000' name='phone number' id='phonenumber' required />
          <span className='message'><label>Message*</label>
            <input type='text' placeholder='Enter your message here.......' name='lastname' id='message' required /></span>
          <button className='formbutton' type='submit'>REACH US</button>
        </form>
      </div>
    </>
  )
}

export default Form