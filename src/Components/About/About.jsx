import React from 'react'
import aboutCSS from './../About/About.module.css'
import profileImg from './../../assets/profile.jpg'
import about_img from './../../assets/profile_picc.png'
import jira from './../../assets/jira.svg'
import smart from './../../assets/smart.svg'
import coda from './../../assets/coda.svg'
import award from './../../assets/award.jpg'

function About() {
    return (
        <div className={`${aboutCSS.About_wrapper} setcion`} id="about">
            <div className="Section_title">
                <p>AGILE LEADER & SCRUM MASTER</p>
                <h2>Hi ! I M <span>Munya</span> , A Project Manager .<br /></h2>
            </div>

            <div className={aboutCSS.about_container}>
                <div className={aboutCSS.about_details}>
                    <h2>60+</h2>
                    <small>Projects Completed</small>
                    <p>Each project reflects a commitment to excellence, delivering value-driven solutions across diverse industries. From concept to execution, I ensure seamless collaboration, timely delivery, and impactful results</p>
                    <div className={aboutCSS.profile}>
                        <img src={about_img} alt="profile-image" />
                        <i className="ri-arrow-right-up-line"></i>
                    </div>
                </div>
                <div className={aboutCSS.about_content}>
                    <div className={aboutCSS.about_image}>
                        <img src={profileImg } alt="about-image" />
                        <div className={aboutCSS.about_info}>
                            <h3>Agile Transformation Leader | Senior Scrum Master & Agile Coach | Project Manager | Driving Cross-Industry Agile Success in SaaS, GRC, HCM, Finance, Retail, Insurance, and Software Development<span>Munya</span></h3>
                        </div>
                    </div>
                    <div className={aboutCSS.about_detail}>
                        <p>My Creative Toolkit</p>
                        <h3>The Tools behind <br /> Creating the Magic</h3>
                        <p>Empowering projects with industry-leading tools for seamless collaboration and effective management.</p>

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
                    <i className="ri-award-line"></i>

                </div>
                <div className={aboutCSS.awards_details}>
                    <p>Highlight & Accomplishment</p>
                    <h3>Award & Recognition</h3>
                    <p>Recognized for excellence and dedication, these certifications and awards highlight my commitment to professional growth and delivering exceptional results</p>
                    <div className={aboutCSS.awards_list}>
                        <p><i className='ri-trophy-line'></i>ISC2 Cybersecurity(CC)</p>
                        <p><i className='ri-trophy-line'> </i>SAFe Agilist</p>
                        <p><i className='ri-trophy-line'> </i>ICP-ACC</p>
                        <p><i className='ri-trophy-line'> </i>PMI-ACP</p>
                        <p><i className='ri-trophy-line'></i>PMP</p>
                        <p><i className='ri-trophy-line'> </i>TKP</p>
                        <p><i className='ri-trophy-line'> </i>Google Cloud Digital Leader</p>
                        <p><i className='ri-trophy-line'> </i>CSM</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About
