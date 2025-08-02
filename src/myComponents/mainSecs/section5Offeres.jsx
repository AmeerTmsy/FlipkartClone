import React from 'react';
import offImgURLs from '../../datas/offersImgs';

function Offeres(props) {
    return (
        <div className='section5'>
            <div className='section51'>
                <div className='section5List'>
                    {
                        // for(let i=1; i<=offImgURLs.length/3>; i++){
                            offImgURLs.map((url, idx) => (
                                <div className='section5ListCard' key={idx}>
                                    <img src={url} alt="" />
                                </div>
                            ))
                        // }
                    }
                </div>
            </div>
        </div>
    );
}

export default Offeres;