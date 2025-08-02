import React from 'react';
import { Link } from 'react-router-dom';
import smartPhones from '../../datas/smartPhones';

function Section3(props) {

    return (
        <div className='section3'>
            {/* <h2>Best Deals on Smartphones</h2> */}
            <div className='section31'>
                <div className='smartPhoneList'>
                    {
                        smartPhones.map((smartPhones, idx) => (
                            <Link className='section31link' to='/' key={idx}>
                                <div className='section11LinkDiv'>
                                    <div>
                                        <img src={smartPhones.url} alt={smartPhones.title} />
                                    </div>
                                    <span>
                                        <span>{smartPhones.title}</span>
                                    </span>
                                    <span>
                                        <span>{smartPhones.priceRange}</span>
                                    </span>
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
    );
}

export default Section3;