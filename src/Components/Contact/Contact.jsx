import React from 'react'
import contactCSS from './../Contact/Contact.module.css'
import contactimg from './../../assets/contact-bg.jpg'


function Contact() {
    return (
        <div className={`${contactCSS.contact_wrapper} section`} id="conatct">
            <div className="Section_title">
                <p>Let's Connect</p>
                <h2>Conatct me For <br /> Your Next Project!!</h2>
            </div>

            <div className={contactCSS.contact_container}>
                <div className={contactCSS.contact_image}>
                    <img src={contactimg} alt="" />
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
                        <div className={contactCSS.input_container}>
                            <div className={contactCSS.input_wrapper}>
                                <input type="text" placeholder='Enter Name' />
                            </div>
                            <div className={contactCSS.input_wrapper}>
                                <input type="Email" placeholder='Enter Email' />
                            </div>
                        </div>
                        <div className={contactCSS.input_wrapper}>
                            <input type="text" placeholder='Enter Phone' />
                        </div>
                        <textarea placeholder="Message"></textarea>

                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
