import React from 'react'
import serviceCSS from './../Service/Service.module.css'
import serviceBg from './../../assets/Service-bg.jpg'

import gallery01 from './../../assets/Gallery01.jpg'
import gallery02 from './../../assets/Gallery02.jpg'
import gallery03 from './../../assets/Gallery03.jpg'
import gallery04 from './../../assets/Gallery04.jpg'
import gallery05 from './../../assets/Gallery05.jpg'


function Service() {
    return (
        <div className={`${serviceCSS.Service_wrapper} section`}>
            <div className="Section_title">
                <p>MANAGING YOUR PROJECT IN A WAY THAT REFLECTS YOUR VISION</p>
                <h2>Services That Your Ideas  <br /> a great Succes</h2>
            </div>

            <div className={serviceCSS.service_container} id="service">
                <img src={serviceBg} alt="service-bg" />
                <div className={serviceCSS.service_content}>
                    <small><i className='ri-video-on-ai-line'>Lorem ipsum dolor.</i></small>

                    <div className={serviceCSS.service_info}>
                        <div className={serviceCSS.content_wrapper}>
                            <h2>Lorem, ipsum. <br /> Lorem, ipsum.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure quod porro! Vero inventore eum fugiat neque et veritatis laboriosam?</p>
                        </div>
                        <div className={serviceCSS.content_wrapper}>
                            <h3>How do I Book you for a Project ?</h3>
                            <p>You can book me by conatcting me through the website's Contact form .</p>
                            <h3>Do you travel for Projects ?</h3>
                            <p>Travel Fees may apply depending on the location.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={serviceCSS.Gallery} id='works'>
                <div className={serviceCSS.gallery_img} count="01">
                    <img src={gallery01} alt="service" />
                </div>
                <div className={serviceCSS.gallery_img} count="02">
                    <img src={gallery02} alt="service" />
                </div>
                <div className={serviceCSS.gallery_img} count="03">
                    <img src={gallery03} alt="service" />
                </div>
                <div className={serviceCSS.gallery_img} count="04">
                    <img src={gallery04} alt="service" />
                </div>
                <div className={serviceCSS.gallery_img} count="05">
                    <img src={gallery05} alt="service" />
                </div>
            </div>
        </div>
    )
}

export default Service
