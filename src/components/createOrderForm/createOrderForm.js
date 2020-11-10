import React, { useState } from 'react';

import './createOrderForm.css';

export default function CreateOrderForm() {
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

    function createOrder(e) {
        e.preventDefault();

        
    }

    return (
        <div class="wrapper-order-form wrapper-pop-up-form">
            <div class="create-order-form pop-up-form">
                <h3>Please, write order details</h3>
                <form action="#" onSubmit={createOrder} >
                    <h4>Summary</h4>
                    <input type="text" 
                        class="createdAt" 
                        placeholder="Created at" 
                        onChange={(e) => setOrder({createdAt: e.target.value, ...order})}  
                    />
                    <input 
                        type="text" 
                        class="shippedAt" 
                        placeholder="Shipped at" 
                        onChange={(e) => setOrder({shippedAt: e.target.value, ...order})}  
                    />
                    <h4>Status</h4>
                    <select class="status">
                        <option value="In time" selected>In time</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Too late">Too late</option>
                    </select>
                    <h4>Ship to</h4>
                    <input 
                        type="text" 
                        class="ZIP" 
                        placeholder="ZIP" 
                        onChange={(e) => setOrder({ZIP: e.target.value, ...order})}  
                    />
                    <input 
                        type="text" 
                        class="region" 
                        placeholder="Region" 
                        onChange={(e) => setOrder({region: e.target.value, ...order})}  
                    />
                    <input 
                        type="text" 
                        class="country" 
                        placeholder="Country" 
                        onChange={(e) => setOrder({country: e.target.value, ...order})}  
                    />
                    <h4>Customer Info <button class="exist-customers">Select an existing customer</button></h4>
                    <div class="customers-info">
                        <input 
                            type="text" 
                            class="firstName" 
                            placeholder="First name" 
                            onChange={(e) => setOrder({firstName: e.target.value, ...order})}  
                        />
                        <input 
                            type="text" 
                            class="lastName" 
                            placeholder="Last name" 
                            onChange={(e) => setOrder({lastName: e.target.value, ...order})}  
                        />
                        <input 
                            type="text" 
                            class="customer-address" 
                            placeholder="Address" 
                            onChange={(e) => setOrder({address: e.target.value, ...order})}  
                        />
                        <input 
                            type="text" 
                            class="phone" 
                            placeholder="Phone" 
                            onChange={(e) => setOrder({phone: e.target.value, ...order})}  
                        />
                        <input 
                            type="text" 
                            class="email" 
                            placeholder="Email" 
                            onChange={(e) => setOrder({email: e.target.value, ...order})}  
                        />
                    </div>
                    <input type="submit" class="submit-create-order" value="Create Order" />
                </form>     
                <div class="order-cancel-button cancel-button"></div> 
            </div>
        </div>
    )
}