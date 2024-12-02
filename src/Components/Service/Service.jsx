import React, { useState } from 'react';
import serviceCSS from './../Service/Service.module.css';
import serviceBg from './../../assets/Service-bg.jpg';

import gallery01 from './../../assets/Gallery01.png';
import gallery02 from './../../assets/Gallery02.jpg';
import gallery03 from './../../assets/Gallery03.jpg';
import gallery04 from './../../assets/Gallery04.jpg';
import gallery05 from './../../assets/Gallery05.png';

function Service() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const galleryData = [
        {
            img: gallery01,
            title: 'Ultimate Solutions Group (UKG), ',
            description: `
                SAFe Agile Transformation: Implemented SAFe framework for workforce management, achieving a 30% productivity increase and 20% reduction in project lead times.
                Agile Maturity Enhancement: Improved Agile maturity by 15%, reduced defects by 25%, and increased customer satisfaction by 10%.
                Risk Mitigation Dashboard: Developed KPIs and dashboards to reduce risks by 40% and enhance stakeholder visibility.
            `,
        },
        
        {
            img: gallery02,
            title: 'Quantik Global Consulting Projects',
            description: `
                Data Migration to Oracle Cloud: Migrated financial data to Oracle Cloud, reducing delivery time by 20%, improving data access by 15%, and lowering operational costs through decommissioning legacy systems.
                Enhanced Project Visibility: Created custom Jira dashboards for financial applications, increasing stakeholder satisfaction by 15% and improving transparency in tracking compliance and investment risks.
                Agile Transformation: Facilitated Agile adoption for financial product teams, improving productivity by 30%, reducing delivery time by 20%, and streamlining development for key systems like loan processing and financial planning tools.
            `,
        },
        
        {
            img: gallery03, 
            title: 'Afriforce Data Projects',
            description: `
                System Performance Optimization: Enhanced data analytics tools for financial reporting, increasing performance by 30% and sprint completion by 35%. Optimized architecture for faster data visualization and risk analysis.
                Cross-Departmental Coordination: Streamlined workflows across finance departments, reducing delays and achieving a 98% on-time delivery rate for projects like portfolio management and financial reporting schedules.
                Agile Process Refinement: Improved Agile processes for financial software delivery, increasing team velocity by 20% and ensuring consistent, high-quality, on-time delivery of tools like revenue analytics and tax compliance software.
            `,
        },
        {
            img: gallery04,
            title: 'Empower Technologies Projects',
            description: `
                Operational Reporting Enhancement: Built Oracle BI solutions for real-time retail analytics, improving decision-making and reporting satisfaction by 20%. Delivered dashboards for sales, inventory tracking, and customer insights to boost efficiency and control.
                Data Security and Access: Enhanced secure data access and query performance for retail dashboards, reducing query time by 30% and improving data security. Implemented protocols for access management and optimized sensitive data handling.
                Agile Process Optimization: Refined Agile practices for BI teams, achieving a 98% on-time delivery rate for tools like promotion analysis, supply chain analytics, and retail demand forecasting.
            `,
        },
        {
            img: gallery05, 
            title: 'Techsol Systems Projects',
            description: `
                Business Intelligence for Retail Strategy: Developed BI solutions that increased profitability by 10%, including dashboards for sales, customer segmentation, and retail trends analysis to support data-driven decisions.
                Optimized Data Structures: Streamlined reporting by creating star schemas and improving data layers, reducing report generation time by 20% and retrieval by 25%. Key projects included inventory performance, automated sales reporting, and supplier analytics.
                Data Integrity Enhancement: Ensured data accuracy and reliability for retail BI, improving customer purchase data integrity, stock monitoring, and retail performance dashboards.
            `,
        },
    ];

    const openModal = (item) => {
        setModalContent(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent({});
    };

    return (
        <div className={`${serviceCSS.Service_wrapper} section`}>
            <div className="Section_title">
                <p>MANAGING YOUR PROJECT IN A WAY THAT REFLECTS YOUR VISION</p>
                <h2>Services That Make Your Ideas <br /> a Great Success</h2>
            </div>

            <div className={serviceCSS.service_container} id="service">
                <img src={serviceBg} alt="service-bg" />
                <div className={serviceCSS.service_content}>
                    <small><i className='ri-video-on-ai-line'></i>Blip <u className="ri-emotion-happy-line"></u></small>

                    <div className={serviceCSS.service_info}>
                        <div className={serviceCSS.content_wrapper}>
                            <h2>Looking Ahead <br /> To a Great Future</h2>
                            <p>As a LinkedIn Top Voice in Agile Methodologies, I’m dedicated to advancing Agile practices and delivering results that consistently exceed expectations.</p>
                        </div>
                        <div className={serviceCSS.content_wrapper}>
                            <h3>How do I Book you for a Project?</h3>
                            <p>You can book me by contacting me through the website's Contact form.</p>
                            <h3>Do you travel for Projects?</h3>
                            <p>Travel Fees may apply depending on the location.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={serviceCSS.Gallery} id='works'>
                {galleryData.map((item, index) => (
                    <div
                        key={index}
                        className={serviceCSS.gallery_img}
                        count={`0${index + 1}`}
                        onClick={() => openModal(item)}
                    >
                        <img src={item.img} alt={`service-${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={`${serviceCSS.modalOverlay}`} onClick={closeModal}>
                    <div
                        className={`${serviceCSS.modal}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={`${serviceCSS.modalContent}`}>
                            <img src={modalContent.img} alt={modalContent.title} />
                            <h3>{modalContent.title}</h3>
                            <p>{modalContent.description}</p>
                        </div>
                        <button
                            className={`${serviceCSS.modalClose}`}
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Service;
