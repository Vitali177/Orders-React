import React from 'react';

import './footer.css';

const Footer = ({ deleteOrder, onCreateOrderForm }) => {
    return (
        <footer className="footer">
            <div 
                className="footer__create-product"
                onClick={() => onCreateOrderForm()}>
                <div className="footer__button-create-product"></div>
                <p>Create Product</p>
            </div>     
            <div 
                className="footer__delete-order"
                onClick={() => deleteOrder()}>
                <div className="footer__button-delete-order"></div>
                <p>Delete Order</p>
            </div>            
        </footer>
    )
}


export default Footer;