import React, {Component} from 'react';
import OrderListItem from '../orderListItem/';
import Spinner from '../spinner/';

import './orderList.css';

export default class OrderList extends Component {

    state = {
        orderList: null
    }

    async componentDidMount() {
        let url = `${window.location.origin}/api/Orders`;

        if (process.env.NODE_ENV === 'development') {
            url = 'http://localhost:8080/api/Orders';
        }

        const res = await fetch(url);
        const data = await res.json();

        await (() => {
            this.setState({orderList: data});
        })();            
    }

    render() {
        const {orderList} = this.state;
        const {idSelectedOrder} = this.props;

        const spinner = !orderList ? <Spinner /> : null; 
        const items = orderList ? orderList.map((order, index) => <OrderListItem 
            order={order} key={order.id} idSelectedOrder={idSelectedOrder} />)
            : null;

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