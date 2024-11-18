import React from 'react'
import newCSS from './../News/News.module.css'
import news_pic01 from './../../assets/blog01.jpg'
import news_pic02 from './../../assets/blog02.jpg'
import news_pic03 from './../../assets/blog03.jpg'

function News() {
  return (
    <div className={`${newCSS.news_Wrapper} section`} id='news'>
      <div className="Section_title">
        <p>Explore The Latest Updates</p>
        <h2>The Latest News and Creative <br /> Updates form my Journey</h2>

        <div className={newCSS.news_cards}>
            <div className={newCSS.card}>
                <img src={news_pic01} alt="news-image" />

                <div className={newCSS.news_content}>
                    <p>Lifestyle</p>
                    <h3>Lorem ipsum dolor <br /> sit amet consectetur.</h3>

                    <div className={newCSS.profile}>
                        <i className='ri-user-line'></i>
                        <small>Lorem, ipsum.</small>
                        <i className="ri-time-line"></i>
                        <small>Lorem, ipsum dolor.</small>
                    </div>
                </div>
            </div>

            <div className={newCSS.card}>
                <img src={news_pic02} alt="news-image" />

                <div className={newCSS.news_content}>
                    <p>Tips and Tricks</p>
                    <h3>Lorem ipsum dolor <br /> sit amet consectetur.</h3>

                    <div className={newCSS.profile}>
                        <i className='ri-user-line'></i>
                        <small>Lorem, ipsum.</small>
                        <i className="ri-time-line"></i>
                        <small>Lorem, ipsum dolor.</small>
                    </div>
                </div>
            </div>

            <div className={newCSS.card}>
                <img src={news_pic03} alt="news-image" />

                <div className={newCSS.news_content}>
                    <p>Lifestyle</p>
                    <h3>Lorem ipsum dolor <br /> sit amet consectetur.</h3>

                    <div className={newCSS.profile}>
                        <i className='ri-user-line'></i>
                        <small>Lorem, ipsum.</small>
                        <i className="ri-time-line"></i>
                        <small>Lorem, ipsum dolor.</small>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default News
