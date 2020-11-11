import React, { useEffect } from 'react';
import OrderListItem from '../orderListItem/';
import Spinner from '../spinner/';
import NoOrders from '../noOrders/';

import { connect } from "react-redux";
import { fetchOrders, setOrderSearchText } from '../../redux/actions/';

import './orderList.css';

function OrderList({idSelectedOrder, onChangeSelectedOrderId, onCreateOrderForm, isMenuOpen, onToggleMenu, orderList, isReceiveOrders, fetchOrders, orderSearchText, setOrderSearchText}) {

    useEffect(() => {        
        fetchOrders(orderSearchText);
    }, []);

    function searchOrders(e) {
        e.preventDefault();
        fetchOrders(orderSearchText);
    }    

    const spinner = !(orderList && isReceiveOrders) ? <Spinner /> : null; 
    const items = orderList && isReceiveOrders ? orderList.map((order) => <OrderListItem 
            order={order} 
            key={order.id} 
            idSelectedOrder={idSelectedOrder} 
            onChangeSelectedOrderId={onChangeSelectedOrderId} />)
        : null;

    return (            
        <section className={isMenuOpen ? 'order-list' : 'order-list order-list--hidden'}>
            <div className="order-list__header">
                <div className="order-list__header-row">
                    <button className="order-list__button-back" onClick={() => onToggleMenu(false)}></button>
                    <h3>Orders (<span>{orderList ? orderList.length : 0}</span>)</h3>
                </div>                    
                <form action="#" className="order-list__form" onSubmit={searchOrders}>
                    <input 
                        type="search" 
                        className="order-list__input-search" 
                        value={orderSearchText}
                        placeholder="Search" 
                        onChange={(e) => setOrderSearchText(e.target.value)}
                    />
                    <div className="order-list__button-search">
                        <input type="submit" value="" />
                    </div>
                    <div className="order-list__button-refresh"></div>
                </form>
            </div>
            <div className="order-list__main">
                {spinner}
                {items ? (items.length ? items : <NoOrders />) : null}
            </div>
            <div className="order-list__footer">
                <div 
                    className="order-list__footer-button-create-order plus-animation"
                    onClick={() => onCreateOrderForm()}    
                >
                </div>
            </div>
        </section>
    )  
}

export default connect(
    ({ orderList, isReceiveOrders, orderSearchText }) => ({orderList, isReceiveOrders, orderSearchText}),
    {fetchOrders, setOrderSearchText}
)(OrderList);