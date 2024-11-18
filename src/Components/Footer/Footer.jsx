import React from 'react'
import footerCSS from './../Footer/Footer.module.css'

function Footer() {
  return (
    <div className={`${footerCSS.footer_wrapper} section`}>
        <h3>Munya</h3>
      <div className={footerCSS.footer_links}>
            <a href="#about">About</a>
            <a href="#service">Service</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
      </div>
      <div className={footerCSS.social}>
        <i className='ri-facebook-line'></i>
        <i className='ri-instagram-line'></i>
        <i className='ri-twitter-line'></i>
        <i className='ri-linkedin-line'></i>
        <i className='ri-whatsapp-line'></i>
      </div>
    </div>
  )
}

export default Footer
