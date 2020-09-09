import React from 'react';

import './createOrderForm.css';

const CreateOrderForm = ({ onCloseForm }) => {
    return (        
        <div className="wrapper-product-form wrapper-pop-up-form">
            <div className="create-product-form pop-up-form">
                <h3>Please, write product details</h3>
                <form action="#">
                    <input type="text" className="input-name" placeholder="Name" required />
                    <input type="text" className="input-price" placeholder="Price" required />
                    <input type="submit" className="submit-create-product" value="Create Product" />
                </form>     
                <div 
                    className="product-cancel-button cancel-button"
                    onClick={() => onCloseForm()}>
                </div> 
            </div>
        </div>
    )
}

export default CreateOrderForm;