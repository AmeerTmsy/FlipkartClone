import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import smartPhones from '../../datas/smartPhones';

function Section3(props) {

    const [visibleSmartPhones, setVisibleSmartPhones] = useState(smartPhones);

    useEffect(() => {
        const updateVisiblePhones = () => {
            if (window.innerWidth < 769) setVisibleSmartPhones(smartPhones.slice(0, 4));
            else setVisibleSmartPhones(smartPhones);
        };

        updateVisiblePhones(); // Initial check
        window.addEventListener('resize', updateVisiblePhones);
        // Cleanup on unmount
        return () => window.removeEventListener('resize', updateVisiblePhones);
    }, []);

    return (
        <div className='section3'>
            <div className='section31'>
                <h2>Best Deals on Smartphones</h2>
                <div style={{ width: '100%', padding: '0 1em', boxSizing: 'border-box' }}>
                    <div className='smartPhoneList'>
                        {
                            visibleSmartPhones.map((smartPhones, idx) => (
                                <Link className='section31link' to='/' key={idx}>
                                    <div className='section11LinkDiv'>
                                        <div>
                                            <img src={smartPhones.url} alt={smartPhones.title} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 3 }}>
                                            <span>
                                                <span>{smartPhones.title}</span>
                                            </span>
                                            <span>
                                                <span>{smartPhones.priceRange}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='section11LinkDivMore'>
                                        <div>
                                            <i className="ri-arrow-right-s-line"></i>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className='smartPhoneRightdiv'>
                        <Link className='section31SPRlink' to='/' >
                            <div className='section31LinkDiv'>
                                <div>
                                    <img src='https://rukminim1.flixcart.com/fk-p-flap/530/810/image/da6a671bf5063ffd.jpeg?q=90' alt={'smartPhones.title'} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;