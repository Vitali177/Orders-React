import React, { useState } from 'react';

import './createOrderForm.css';

export default function CreateOrderForm({onCloseForm}) {
    const [order, setOrder] = useState({
        createdAt: '',
        shippedAt: '',
        ZIP: '',
        region: '',
        country: '',
        firstName: '',
        lastName: '',
        customerAddress: '',
        phone: '',
        email: ''
    });

    const [status, setStatus] = useState('In time');

    function createOrder(e) {
        e.preventDefault();

        
    }

    return (
        <div className="wrapper-order-form wrapper-pop-up-form">
            <div className="create-order-form pop-up-form">
                <h3>Please, write order details</h3>
                <form action="#" onSubmit={createOrder} >
                    <h4>Summary</h4>
                    <input type="text" 
                        className="createdAt" 
                        placeholder="Created at" 
                        onChange={(e) => setOrder({createdAt: e.target.value, ...order})}  
                    />
                    <input 
                        type="text" 
                        className="shippedAt" 
                        placeholder="Shipped at" 
                        onChange={(e) => setOrder({shippedAt: e.target.value, ...order})}  
                    />
                    <h4>Status</h4>
                    <select className="status" value={status} onChange={(e) => setStatus(e.target.value)} >
                        <option value="In time">In time</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Too late">Too late</option>
                    </select>
                    <h4>Ship to</h4>
                    <input 
                        type="text" 
                        className="ZIP" 
                        placeholder="ZIP" 
                        onChange={(e) => setOrder({ZIP: e.target.value, ...order})}  
                    />
                    <input 
                        type="text" 
                        className="region" 
                        placeholder="Region" 
                        onChange={(e) => setOrder({region: e.target.value, ...order})}  
                    />
                    <input 
                        type="text" 
                        className="country" 
                        placeholder="Country" 
                        onChange={(e) => setOrder({country: e.target.value, ...order})}  
                    />
                    <h4>Customer Info <button className="exist-customers">Select an existing customer</button></h4>
                    <div className="customers-info">
                        <input 
                            type="text" 
                            className="firstName" 
                            placeholder="First name" 
                            onChange={(e) => setOrder({firstName: e.target.value, ...order})}  
                        />
                        <input 
                            type="text" 
                            className="lastName" 
                            placeholder="Last name" 
                            onChange={(e) => setOrder({lastName: e.target.value, ...order})}  
                        />
                        <input 
                            type="text" 
                            className="customer-address" 
                            placeholder="Address" 
                            onChange={(e) => setOrder({address: e.target.value, ...order})}  
                        />
                        <input 
                            type="text" 
                            className="phone" 
                            placeholder="Phone" 
                            onChange={(e) => setOrder({phone: e.target.value, ...order})}  
                        />
                        <input 
                            type="text" 
                            className="email" 
                            placeholder="Email" 
                            onChange={(e) => setOrder({email: e.target.value, ...order})}  
                        />
                    </div>
                    <input type="submit" className="submit-create-order" value="Create Order" />
                </form>     
                <div className="order-cancel-button cancel-button" onClick={() => onCloseForm()} ></div> 
            </div>
        </div>
    )
}