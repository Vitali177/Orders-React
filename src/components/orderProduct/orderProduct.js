import React from 'react';

import './orderProduct.css';

const OrderProduct = ({data, deleteProduct}) => {
    const {productName, id, price, quantity, totalPrice} = data;
    return (
        <div className="order__line-list-row">
            <li className="product">
                <span className = "value">{productName}</span>
                <span className = "id">{id}</span>
            </li>
            <li className="unit-price">
                <span className="mobile-info">Unit Price:<br/></span>
                <span className = "value">{price}</span>
                <span className="currency">EUR</span>
            </li>
            <li className="quantity">
                <span className="mobile-info">Quantity:<br/></span>
                <span className = "value">{quantity}</span>
            </li>
            <li className="total">
                <span className="mobile-info">Total:<br/></span>
                <span className = "value">{totalPrice}</span>
                <span className="currency">EUR</span>
            </li>
            <li className="delete-product">
                <div 
                    className="button-delete-product"
                    onClick={() => deleteProduct(id, quantity)}>
                </div>
            </li>
        </div>
    )
}

export default OrderProduct;