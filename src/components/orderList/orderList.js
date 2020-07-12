import React, {Component} from 'react';

import './orderList.css';

export default class OrderList extends Component {

    state = {
        orderList: null
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/Orders';

        const res = await fetch(url);
        const data = await res.json();

        await (() => {
            this.setState({orderList: data});
        })();            
    }

    render() {
        const {orderList} = this.state;
        const spinner = !orderList ? 'spinner' : null; 
        let items = null;

        if (orderList) {
            items = orderList.map((order) => {
                const classes = ['in-time', 'urgent', 'too-late'];
                const statuses = ['In time', 'Urgent', 'Too late'];
                const statusClass = 'order-list__item-order-time order-list__item-order-time--' + classes[statuses.indexOf(order.status)];

                return (
                    <div className="order-list__item" id={order.id}>
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
            });            
        }

        return (            
            <section className="order-list">
                <div className="order-list__header">
                    <div className="order-list__header-row">
                        <button className="order-list__button-back"></button>
                        <h3>Orders (<span>{orderList ? orderList.length : 0}</span>)</h3>
                    </div>                    
                    <form action="#" className="order-list__form">
                        <input type="search" className="order-list__input-search" placeholder="Search" />
                        <div className="order-list__button-search">
                            <input type="submit" value="" />
                        </div>
                        <div className="order-list__button-refresh"></div>
                    </form>
                </div>
                <div className="order-list__main">
                    {spinner}
                    {items}
                </div>
                <div className="order-list__footer">
                    <div className="order-list__footer-button-create-order plus-animation"></div>
                </div>
            </section>
        )        
    }
}