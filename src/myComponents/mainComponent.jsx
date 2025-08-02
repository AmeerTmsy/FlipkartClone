import React from 'react';
import Section1 from './mainSecs/section1';
import Section2 from './mainSecs/section2';
import Section3 from './mainSecs/section3';
import Section4 from './mainSecs/section4';
import Offeres from './mainSecs/section5Offeres';
import FeaturedBrands from './mainSecs/section6FeaturedBrands';

function MainComponent(props) {
    return (
        <main>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Offeres />
            <FeaturedBrands />
        </main>
    );
}

export default MainComponent;