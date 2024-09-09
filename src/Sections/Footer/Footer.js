import "./Footer.css"
import React from 'react';

const Footer = () => {
    return (
        <div className="container footer flex-center">
            <div className="content-footer flex-center">
                <h1>Subscribe to get 50% discount price</h1>
                <div className="search-footer">
                    <input type="text" placeholder="Email address" />
                    <button>Order now</button>
                </div>
            </div>  
        </div>
    );
}

export default Footer;
