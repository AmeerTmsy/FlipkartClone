import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import slides from '../../datas/slideImgs';

function Section2(props) {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction) => {
        const { current } = scrollRef;
        let newIndex = currentIndex;

        if (direction === 'right') {
            if (currentIndex === slides.length - 1) newIndex = 0;
            else newIndex = currentIndex + 1;
        } else {
            if (currentIndex === 0) newIndex = slides.length - 1;
            else newIndex = currentIndex - 1
        }

        setCurrentIndex(newIndex);

        if (current && !(direction === 'right' && currentIndex === slides.length - 1)) {
            const scrollAmount = current.offsetWidth;
            current.scrollTo({
                left: scrollAmount * newIndex,
                behavior: 'smooth'
            });
        }
        else {
            const scrollAmount = current.offsetWidth;
            current.scrollLeft = scrollAmount * newIndex;
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            scroll('right');
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex])

    return (
        <div className='section2'>
            <div className='section21'>
                <Link className='section21link' to='/'>
                    <div className='section21LinkDiv'>
                        <div className='caroBtn previous'>
                            <button onClick={() => scroll('left')}>
                                <i className="ri-arrow-left-s-line"></i>
                            </button>
                        </div>
                        <div className={`caroImagOverFlowX lastToFirst`} ref={scrollRef}>
                            <div className='mapCaroDiv'>
                                {
                                    slides.map((url, idx) => (
                                        <div key={idx}>
                                            <img
                                                src={url}
                                                alt=""
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='caroBtn next'>
                            <button onClick={() => scroll('right')}>
                                <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                        <div className='spCaroBody'>
                            {slides.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`spCaro ${idx === currentIndex ? 'active' : ''}`}
                                >
                                    <div className={ `spCaroGrow ${idx === currentIndex ? ' spCaroGrowActive' : ''}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Section2;