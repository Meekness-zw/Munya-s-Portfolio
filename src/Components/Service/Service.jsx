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
            title: 'Project 1',
            description: 'Description for Project 1. Delivered exceptional results.',
        },
        {
            img: gallery02,
            title: 'Project 2',
            description: 'Description for Project 2. Successfully managed end-to-end.',
        },
        {
            img: gallery03,
            title: 'Project 3',
            description: 'Description for Project 3. Streamlined processes efficiently.',
        },
        {
            img: gallery04,
            title: 'Project 4',
            description: 'Description for Project 4. Exceeded expectations.',
        },
        {
            img: gallery05,
            title: 'Techsol Systems',
            description: 'Description for Project 5. Innovated agile practices.',
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
