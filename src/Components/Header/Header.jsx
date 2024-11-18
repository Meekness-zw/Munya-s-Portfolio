import React from 'react'
import headerCSS from './../Header/Header.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import {Autoplay} from 'swiper/modules'

import headerimage1 from './../../assets/one.jpg'
import headerimage2 from './../../assets/two.jpg'
import headerimage3 from './../../assets/three.jpg'
import headerimage4 from './../../assets/four.jpg'
import headerimage5 from './../../assets/five.webp'
import headerimage6 from './../../assets/six.jpg'
import headerimage7 from './../../assets/seven.webp'
import headerimage8 from './../../assets/eight.jpg'

function Header() {
  return (
    <div className={`${headerCSS.header_wrapper} section`} id='home'>

      <div className={headerCSS.social}>
        <i className='ri-facebook-line'></i>
        <i className='ri-instagram-line'></i>
        <i className='ri-linkedin-line'></i>
        <i className='ri-twitter-x-line'></i>
      </div>

      <Swiper className={headerCSS.swiper} speed={1500} loop={true} autoplay={{delay: 3400}} modules={[Autoplay]}>
        <SwiperSlide>
          <div className={headerCSS.Header_slide}>
            <div className={headerCSS.header_content}>
              <small>Building better teams, one sprint at a time.</small>
              <h2>Leadership that inspires agility <br /> and delivers results.</h2>
              <p>As a Scrum Master, my role is to facilitate collaboration, remove impediments, and ensure that our team is empowered to deliver value iteratively and incrementally. My goal is to support the team in continuously improving processes, fostering a culture of trust and transparency, and ensuring that we remain focused on delivering the highest priority work that drives value for our customers.</p>
              <button>Let's Collaborate <i className='ri-arrow-right-up-line'></i></button>
            </div>
            <div className={headerCSS.header_images}>
              <div className={headerCSS.header_image}>
                <img src={headerimage1} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage2} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage3} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage4} alt="header-image" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={headerCSS.slide2}>
          <div className={headerCSS.Header_slide}>
            <div className={headerCSS.header_content}>
              <small>Securing the future, one byte at a time.</small>
              <h2>Guardians of the digital realm <br /> Your security is our priority.</h2>
              <p>Passionate and detail-oriented cybersecurity professional dedicated to protecting digital assets and mitigating risks. With a strong foundation in threat detection, vulnerability assessment, and secure systems design, I specialize in safeguarding critical infrastructure and ensuring compliance across diverse environments. Skilled in proactive defense strategies and incident response to deliver robust, reliable security solutions</p>
              <button>Let's Collaborate <i className='ri-arrow-right-up-line'></i></button>
            </div>
            <div className={headerCSS.header_images}>
              <div className={headerCSS.header_image}>
                <img src={headerimage5} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage6} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage7} alt="header-image" />
              </div>
              <div className={headerCSS.header_image}>
                <img src={headerimage8} alt="header-image" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div >
  )
}

export default Header
