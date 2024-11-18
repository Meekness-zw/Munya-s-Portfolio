import React from 'react'
import testimonialCSS from './../Testimonials/Testimonials.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Autoplay } from 'swiper/modules'

function Testimonials() {
    return (
        <div className={`${testimonialCSS.Testimonial_wrapper} section`}>
            <div className="Section_title">
                <p>An Enlightening Journey</p>
                <h2>Stories in Motion</h2>
            </div>

            <Swiper className={testimonialCSS.swiper}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                }}

                slidesPerView={3}
                spaceBetween={30}
                loop={true}

                breakpoints={{
                    0:{
                        slidesPerView:1,
                    },
                    768:{
                        slidesPerView:2,
                    },
                    1024:{
                        slidesPerView:3,
                    }
                }}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, aspernatur.</p>

                        <div className={testimonialCSS.testimonial_profile}>
                            <i className="ri-user-line"></i>
                            <span>Lina Parsque</span>

                            <i className='ri-briefcase-4-line'></i>
                            <span>Web Journalist</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, aspernatur.</p>

                        <div className={testimonialCSS.testimonial_profile}>
                            <i className="ri-user-line"></i>
                            <span>Lina Parsque</span>

                            <i className='ri-briefcase-4-line'></i>
                            <span>Web Journalist</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, aspernatur.</p>

                        <div className={testimonialCSS.testimonial_profile}>
                            <i className="ri-user-line"></i>
                            <span>Lina Parsque</span>

                            <i className='ri-briefcase-4-line'></i>
                            <span>Web Journalist</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, aspernatur.</p>

                        <div className={testimonialCSS.testimonial_profile}>
                            <i className="ri-user-line"></i>
                            <span>Lina Parsque</span>

                            <i className='ri-briefcase-4-line'></i>
                            <span>Web Journalist</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Testimonials
