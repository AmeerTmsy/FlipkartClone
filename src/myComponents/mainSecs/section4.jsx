import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import homeApps from '../../datas/homeApps';
function Section4(props) {
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [visibleHomeApps, setVisibleHomeApps] = useState(homeApps);

    const handleScrollCheck = () => {
        const { current } = scrollRef;
        if (!current) return;
        const { scrollLeft, scrollWidth, clientWidth } = current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 to handle precision
    };

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(handleScrollCheck, 300);
        }
    }

    useEffect(() => {
        const updateVisibleHomeApp = () => {
            if (window.innerWidth < 769) setVisibleHomeApps(visibleHomeApps.slice(0, 4));
            else setVisibleHomeApps(visibleHomeApps);
        };

        updateVisibleHomeApp(); // Initial check
        window.addEventListener('resize', updateVisibleHomeApp);
        // Cleanup on unmount
        return () => window.removeEventListener('resize', updateVisibleHomeApp);
    }, []);

    useEffect(() => {
        handleScrollCheck(); // initial check
        const current = scrollRef.current;
        if (current) current.addEventListener('scroll', handleScrollCheck);

        return () => { if (current) current.removeEventListener('scroll', handleScrollCheck) }
    }, []);


    return (
        <div className='section4'>
            {showLeft && (
                <div className='scrollXBtn previous'>
                    <button onClick={() => scroll('left')}>
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                </div>
            )}
            <div className="section41">
                <h2>Home</h2>
                <div className='section411'>
                    <div className='section42' ref={scrollRef}>
                        {
                            visibleHomeApps.map((homeApp, idx) => (
                                <Link className='section4HomeList' key={idx}>
                                    <div className='section4HomeListCard'>
                                        <div>
                                            <img src={homeApp.url} alt="" />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1em', justifyContent: 'center' }}>
                                            <span>{homeApp.title}</span>
                                            <span>{homeApp.priceRange}</span>
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
                </div>
                {showRight && (
                    <div className='scrollXBtn next'>
                        <button onClick={() => scroll('right')}>
                            <i className="ri-arrow-right-s-line"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Section4;