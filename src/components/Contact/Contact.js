import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';
import { openIco, closeIco } from "../../utils/media";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_h830yyn',
      'template_w95mmg5', 
      form.current, 
      'N3If5frQ6dkKunVgy'
      )
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleFocus = (e) => {
    let parent = e.target.parentNode;
    parent.classList.add("focus");
  };

  const handleBlur = (e) => {
    let parent = e.target.parentNode;
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  return (
    <div className="contact" id='contact'>
      <div className="container">
      <img src={openIco} alt="openIcon" className="imgGDSC"/>
      
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
             Thank you for visiting our website. If you have any questions or comments,
             please don't hesitate to reach out to us. You can contact us via phone, email,
             or by filling out the form on the right.
          </p>

          <div className="info">
            <div className="information">
              <i className='bx bx-map' style={{ color: "hsl(217, 78%, 40%)", fontSize: "30px", marginRight: "10px" }}></i>
              <p>EMSI Rabat</p>
            </div>
            <div className="information">
              <i className='bx bx-envelope' style={{ color: "hsl(217, 78%, 40%)", fontSize: "30px", marginRight: "10px" }}></i>
              <p>soon@gdscemsi.com</p>
            </div>
            <div className="information">
              <i className='bx bx-phone-call' style={{ color: "hsl(217, 78%, 40%)", fontSize: "30px", marginRight: "10px" }}></i>
              <p>+212 612 34 56 78</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off" ref={form} onSubmit={sendEmail}>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="email" name="user_email" onFocus={handleFocus} onBlur={handleBlur} className="input" required/>
              <label htmlFor="user_email">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="text" name="user_subject" onFocus={handleFocus} onBlur={handleBlur} className="input" />
              <label htmlFor="user_subject">Subject</label>
              <span>Subject</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" onFocus={handleFocus} onBlur={handleBlur}></textarea>
              <label htmlFor="message">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>

      <img src={closeIco} alt="closeIcon" className="imgGDSC"/>
      </div>
    </div>
    
  )
}

export default Contact