import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import homeApps from '../../datas/homeApps';
function Section4(props) {
    const scrollRef = useRef(null);
    // const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction) => {
        const { current } = scrollRef;
        let newIndex = currentIndex;

        console.log(current, direction);

        // if (direction === 'right') {
        //     if (currentIndex === slides.length - 1) newIndex = 0;
        //     else newIndex = currentIndex + 1;
        // } else {
        //     if (currentIndex === 0) newIndex = slides.length - 1;
        //     else newIndex = currentIndex - 1
        // }

        // setCurrentIndex(newIndex);

        // if (current) {
        //     const scrollAmount = current.offsetWidth;
        //     current.scrollTo({
        //         left: scrollAmount * newIndex,
        //         behavior: 'smooth'
        //     });
        // }
        // else {
        //     const scrollAmount = current.offsetWidth;
        //     current.scrollLeft = scrollAmount * newIndex;
        // }
    }

    return (
        <div className='section4'>
            <div className='scrollXBtn previous'>
                <button onClick={() => scroll('left')}>
                    <i className="ri-arrow-left-s-line"></i>
                </button>
            </div>
            <div className="section41">
                <h2>Home</h2>
                <div className='section411'>
                    <div className='section42' ref={scrollRef}>
                        {
                            homeApps.map((homeApp, idx) => (
                                <Link className='section4HomeList' key={idx}>
                                    <div className='section4HomeListCard'>
                                        <div>
                                            <img src={homeApp.url} alt="" />
                                        </div>
                                        <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '1em', justifyContent: 'center'}}>
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
                <div className='scrollXBtn next'>
                    <button onClick={() => scroll('right')}>
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Section4;