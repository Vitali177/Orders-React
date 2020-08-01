import React from 'react';
import Spinner from '../spinner/';

import './orderAddress.css';

const OrderAddress = ({order, indexTab, indexTabSelected}) => {
    const spinner = !order ? <Spinner /> : null;
    const content = order ? <View order={order} /> : null; 

    let sectionClassNames = 'order__address';
    sectionClassNames += indexTab === indexTabSelected ? ' tab--selected' : '';

    return (
        <section className={sectionClassNames}>
            <div className="order__address-header"> 
                <h4 className="order__address-heading address-processor-heading">Shipping Address</h4>
                <div className="button-edit-display">Edit</div>
            </div>
            <ul className="order__address-list">
                {spinner}
                {content}
            </ul>
        </section>
    )
}

const View = ({order}) => {
    const {address, ZIP, region, country} = order;
    return (
        <>
            <div className="box">
                <li className="order__address-item">Street:</li>
                <input type="text" className="address" value={address} readOnly />
            </div>
            <div className="box">
                <li className="order__address-item">ZIP Code / City:</li>
                <input type="text" className="ZIP" value={ZIP} readOnly />
            </div>
            <div className="box">
                <li className="order__address-item">Region:</li>
                <input type="text" className="region" value={region} readOnly />
            </div>
            <div className="box">
                <li className="order__address-item">Country:</li>
                <input type="text" className="country" value={country} readOnly />
            </div>
        </>        
    )
}

export default OrderAddress;