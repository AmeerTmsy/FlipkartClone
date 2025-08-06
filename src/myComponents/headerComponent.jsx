import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent(props) {
    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Search submitted');
    }
    return (
        <header>
            <div className="headLeft">
                <div className='headLeft1'>
                    <div>
                        <i className="ri-menu-line"></i>
                    </div>
                    <a href="">
                        <img className='headerlogo' src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
                    </a>
                </div>
                <div className='headLeft2'>
                    <form onSubmit={handleSearch}>
                        <div className='search'>
                            <button type='submit' className='submit'><i className="ri-search-line"></i></button>
                            <div>
                                <input
                                    type="text"
                                    placeholder='Search for Products, Brands and More'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="headRight">
                <div className='downLoadIcon'>
                    <i className="ri-mobile-download-line"></i>
                </div>
                <div className='loginDropdown'>
                    <Link to={''}>
                        <i className="ri-account-circle-line headIcon"></i>
                        &nbsp;login&nbsp;
                        <i className="ri-arrow-down-s-line headIcon"></i>
                    </Link>
                </div>
                <div className='headLinkCartHide'>
                    <Link to={''}><i className="ri-shopping-cart-2-line headIcon"></i></Link>
                    <Link  className='hide900px' to={''}>Cart</Link>
                </div>
                <div className='headLinkCartHide'>
                    <Link to={''}><i className="ri-store-line headIcon"></i></Link>
                    <Link className='hide900px' to={''}>Becone&nbsp;a&nbsp;Seller</Link>
                </div>
                <div className='headLinkMenuDotHide'><i className="ri-more-2-line headIcon"></i></div>
            </div>
        </header>
    );
}

export default HeaderComponent;