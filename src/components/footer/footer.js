import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__create-product">
                <div className="footer__button-create-product"></div>
                <p>Create Product</p>
            </div>     
            <div className="footer__delete-order">
                <div className="footer__button-delete-order"></div>
                <p>Delete Order</p>
            </div>            
        </footer>
    )
}

export default Footer;