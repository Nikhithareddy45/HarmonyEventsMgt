import React from 'react'
import '../styles/Contact.css' // Assuming you have a CSS file for styles
function Contact() {
  return (
    <>
    <div className="contact">
      <form className="contact-form" action="https://formspree.io/f/xovwedkn" method="POST">
          <div className="contact-form-detail">
            <label htmlFor="full-name-id">Full Name</label>
            <input type="text" name="full-name-id" id="full-name-id" required />
          </div>
          <div className="contact-form-detail">
            <label htmlFor="email-id">Email Address</label>
            <input type="email" name="email-id" id="email-id"  required/>
          </div>
          <div className="contact-form-detail">
            <label for="services">Select Services</label>
            <select name="services" aria-label="Select Services" required>
                <option value="*" disabled selected>Select Services</option>
                <option value="wedding">Destination Wedding</option>
                <option value="corporate">Corporate Event</option>
            </select>
          </div>
          <div className="contact-form-detail">
            <label for="detail-msg">Message</label>
            <textarea name="detail-msg" id="detail-msg" cols="20" rows="10" placeholder="Enter your Message" required></textarea>
          </div>
          <div className='contact-form-detail submit'>
            <button type="submit" id="submit-id" class="bg">SUBMIT</button>
          </div>
      </form> 
    </div>
    </>
  )
}

export default Contact
