import React, { useEffect, useRef, useState } from 'react';
import featuredBrands from '../../datas/featuredBrands';
import { Link } from 'react-router-dom';

function FeaturedBrands(props) {
    const scrollRef = useRef();
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const handleScrollCheck = () => {
        const { current } = scrollRef;
        if (!current) return;
        const { scrollLeft, scrollWidth, clientWidth } = current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 to handle precision
    }

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(handleScrollCheck, 300)
        }
    }

    useEffect(() => {
        handleScrollCheck();
        const { current } = scrollRef;
        if (current) current.addEventListener('scroll', handleScrollCheck);

        return () => { if (current) current.removeEventListener('scroll', handleScrollCheck) }
    }, [])

    return (
        <div className='featuredBrands'>
            <div className="featuredBrandContain">
                <h2 >Featured Brands</h2>
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
                {showLeft &&
                    <div className='scrollXBtn previous'>
                        <button onClick={() => scroll('left')}>
                            <i className="ri-arrow-left-s-line"></i>
                        </button>
                    </div>
                }
                {showRight &&
                    <div className='scrollXBtn next'>
                        <button onClick={() => scroll('right')}>
                            <i className="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default FeaturedBrands;