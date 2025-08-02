import React, { useRef } from 'react';
import featuredBrands from '../../datas/featuredBrands';
import { Link } from 'react-router-dom';

function FeaturedBrands(props) {
    const scrollRef = useRef();
    const scroll = (direction) => {

    }
    return (
        <div className='featuredBrands'>
            <div className="featuredBrandContain">
                <h2>Featured Brands</h2>
                <div className='featuredBrandsBox'>
                    <div className='featuredBrandsInnerBox' ref={scrollRef}>
                        {
                            featuredBrands.map((url, idx) => (
                                <Link className='featuredBrandCard' key={idx}>
                                    <div className='featuredBrandImgCard'>
                                            <img src={url} alt="" />
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='scrollXBtn previous'>
                    <button onClick={() => scroll('left')}>
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                </div>
                <div className='scrollXBtn next'>
                    <button onClick={() => scroll('right')}>
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedBrands;