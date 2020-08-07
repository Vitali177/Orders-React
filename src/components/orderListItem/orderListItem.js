import React from 'react';

import './orderListItem.css';

function OrderListItem({order, idSelectedOrder, onChangeSelectedOrderId}) {
    const classes = ['in-time', 'urgent', 'too-late'];
    const statuses = ['In time', 'Urgent', 'Too late'];
    const statusClass = 'order-list__item-order-time order-list__item-order-time--' + classes[statuses.indexOf(order.status)];
    const itemClasses = idSelectedOrder === order.id ? "order-list__item order-list__item--selected" : "order-list__item";

    return (
        <div className={itemClasses} id={order.id} onClick={() => onChangeSelectedOrderId(order.id)}>
            <div className="order-list__item-row">
                <h4 className="order-list__item-order">Order <span>{order.id}</span></h4>
                <h3 className="order-list__item-ordered-date">{order.createdAt}</h3>
            </div>
            <div className="order-list__item-row">
                <h5 className="order-list__item-customer">{order.firstName} {order.lastName}</h5>
                <h5 className={statusClass}>{order.status}</h5>
            </div>
            <div className="order-list__item-row">
                <h5 className="order-list__item-shipped">Shipped: <span>{order.shippedAt}</span></h5>
            </div>
        </div>
    )    
}

export default OrderListItem;