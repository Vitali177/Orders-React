import React from 'react';

import './orderButton.css';

const OrderButton = ({className, index, indexTabSelected}) => {
    let classNames = `order__button ${className}`;
    classNames += index === indexTabSelected ? ' order__button--selected' : '';

    return (
        <div className={classNames} key={index}></div>
    )
}

export default OrderButton;