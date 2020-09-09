import React, { useState } from 'react';

import './createOrderForm.css';

export default function CreateOrderForm ({ onCloseForm }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    function createProduct(e) {
        e.preventDefault();

        if ((name || price) === "") return; // if user didn't fill all inputs
        
        let url = `${window.location.origin}/api/OrderProducts`;  
    
        if (process.env.NODE_ENV === 'development') {
            url = 'http://localhost:8080/api/OrderProducts';
        }

        fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({productName: name, price})
        });
        onCloseForm();
    }

    return (        
        <div className="wrapper-product-form wrapper-pop-up-form">
            <div className="create-product-form pop-up-form">
                <h3>Please, write product details</h3>
                <form action="#" onSubmit={(e) => createProduct(e)} >
                    <input 
                        type="text" 
                        className="input-name" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <input 
                        type="text" 
                        className="input-price" 
                        placeholder="Price" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required 
                    />
                    <input 
                        type="submit" 
                        className="submit-create-product" 
                        value="Create Product"                        
                    />
                </form>     
                <div 
                    className="product-cancel-button cancel-button"
                    onClick={() => onCloseForm()}>
                </div> 
            </div>
        </div>
    )
}
