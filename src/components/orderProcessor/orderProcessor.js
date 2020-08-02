import React from 'react';
import Spinner from '../spinner/';

import './orderProcessor.css';

const OrderProcessor = ({order, indexTab, indexTabSelected}) => {
    const spinner = !order ? <Spinner /> : null;
    const content = order ? <View order={order} /> : null; 

    let sectionClassNames = 'order__processor';
    sectionClassNames += indexTab === indexTabSelected ? ' tab--selected' : '';

    return (
        <section className={sectionClassNames}>
            <div className="order__address-header"> 
                <h4 className="order__processor-heading address-processor-heading">Customer Info</h4>
                <div className="button-edit-display">Edit</div>
            </div>
            <ul className="order__processor-list order__address-list">
                {spinner}
                {content}
            </ul>
        </section>        
    )
}

const View = ({order}) => {
    const {firstName, lastName, address, phone, email} = order;
    return (
        <>
            <div className="box">
                <li className="order__address-item">First Name:</li>
                <input type="text" className="firstName" value={firstName} readOnly />
            </div>
            <div className="box">
                <li className="order__address-item">Last Name:</li>
                <input type="text" className="lastName" value={lastName} readOnly />
            </div>
            <div className="box">
                <li className="order__address-item">Address:</li>
                <input type="text" value={address} readOnly />
            </div>
            <div className="box">
                <li className="order__address-item">Phone:</li>
                <input type="text" value={phone} readOnly />
            </div>
            <div className="box">
                <li className="order__address-item">Email:</li>
                <input type="text" className="order-input-country" value={email} readOnly />
            </div>
        </>        
    )
}

export default OrderProcessor;