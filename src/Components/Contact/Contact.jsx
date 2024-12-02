'use client';

import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import contactCSS from './../Contact/Contact.module.css';
import contactimg from './../../assets/contact-bg.jpg';

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID, // Your EmailJS service ID
          process.env.NEXT_PUBLIC_TEMPLATE_ID, // Your EmailJS template ID
          form.current, // The form reference
          process.env.NEXT_PUBLIC_PUBLIC_KEY_ID // Your EmailJS public key
        );
        console.log('Email sent successfully:', result.text);
        setSuccess(true); // Show success notification
        form.current.reset(); // Clear form fields
      } catch (err) {
        console.error('Email sending failed:', err);
        setError(true); // Show error notification
      }
    } else {
      console.error('Form reference is null');
      setError(true);
    }
  };

  return (
    <div className={`${contactCSS.contact_wrapper} section`} id="contact">
      <div className="Section_title">
        <p>Let's Connect</p>
        <h2>Contact Me For <br /> Your Next Project!!</h2>
      </div>

      <div className={contactCSS.contact_container}>
        <div className={contactCSS.contact_image}>
          <img src={contactimg} alt="Contact Background" />
        </div>
        <div className={contactCSS.contact_details}>
          <div className={contactCSS.detail_wrapper}>
            <div className={contactCSS.detail}>
              <i className="ri-building-line"></i>
              <p>Address required here</p>
            </div>
            <div className={contactCSS.detail}>
              <i className="ri-mail-line"></i>
              <p>munyaradzimugomeza@gmail.com</p>
            </div>
            <div className={contactCSS.detail}>
              <i className="ri-time-line"></i>
              <p>10:00 AM - 05:00 PM</p>
            </div>
          </div>
          <div className={contactCSS.form}>
            <h3>Get in Touch</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className={contactCSS.input_container}>
                <div className={contactCSS.input_wrapper}>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className={contactCSS.input_wrapper}>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
            {success && (
              <p className={contactCSS.success_message}>
                ✅ Your message was sent successfully!
              </p>
            )}
            {error && (
              <p className={contactCSS.error_message}>
                ❌ Failed to send your message. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
