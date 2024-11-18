import React from 'react'
import aboutCSS from './../About/About.module.css'
import profileImg from './../../assets/profile.jpg'
import about_img from './../../assets/about.jpg'
import jira from './../../assets/jira.svg'
import smart from './../../assets/smart.svg'
import coda from './../../assets/coda.svg'
import award from './../../assets/award.jpg'

function About() {
    return (
        <div className={`${aboutCSS.About_wrapper} setcion`} id="about">
            <div className="Section_title">
                <p>AGILE LEADER & SCRUM MASTER</p>
                <h2>Hi ! I M <span>Munya</span> , An Agile Leader <br /> Based in Canada.</h2>
            </div>

            <div className={aboutCSS.about_container}>
                <div className={aboutCSS.about_details}>
                    <h2>600+</h2>
                    <small>Projects Completed</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae laudantium esse eius sunt tempore eligendi temporibus. Dicta, id aspernatur?</p>
                    <div className={aboutCSS.profile}>
                        <img src={profileImg} alt="profile-image" />
                        <i className="ri-arrow-right-up-line"></i>
                    </div>
                </div>
                <div className={aboutCSS.about_content}>
                    <div className={aboutCSS.about_image}>
                        <img src={about_img} alt="about-image" />
                        <div className={aboutCSS.about_info}>
                            <h3>Scrum Master <span>Munya</span></h3>
                        </div>
                    </div>
                    <div className={aboutCSS.about_detail}>
                        <p>My Creative Toolkit</p>
                        <h3>The Tools behind <br /> Creating the Magic</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sint id consequatur voluptatum pariatur eveniet.</p>

                        <div className={aboutCSS.Tools}>
                            <div className={aboutCSS.Tool}>
                                <img src={jira} alt="jira" />
                                <p>Jira <span>Project Management -Software</span></p>
                            </div>
                            <div className={aboutCSS.Tool}>
                                <img src={smart} alt="smartsheet" />
                                <p>Smart Sheet <span>Agile Management</span></p>
                            </div>
                            <div className={aboutCSS.Tool}>
                                <img src={coda} alt="coda.io" />
                                <p>Coda <span>Project Management -Application</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={aboutCSS.awards_container}>
                <div className={aboutCSS.awards_image}>
                    <img src={award} alt="award-image" />
                    <i className='ri-play-line'></i>
                </div>
                <div className={aboutCSS.awards_details}>
                    <p>Highlight & Accomplishment</p>
                    <h3>Award & Recognition</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, error. Molestias ipsum assumenda impedit ad ullam magni, obcaecati nemo esse eveniet veniam adipisci consectetur distinctio.</p>
                    <div className={aboutCSS.awards_list}>
                        <p><i className='ri-trophy-line'> </i>Award-winning Project</p>
                        <p><i className='ri-trophy-line'> </i>Featured in The Verse</p>
                        <p><i className='ri-trophy-line'> </i>Collaborated With Convarse</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About
