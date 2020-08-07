import React, {Component} from 'react';
import OrderList from '../orderList';

import './header.css';

export default class Header extends Component {
    render() {
        const {idSelectedOrder, onChangeSelectedOrderId} = this.props;
        return (
            <div className="header">
                <button className="header__button"></button>
                <h1>Order</h1>
                <OrderList idSelectedOrder={idSelectedOrder} onChangeSelectedOrderId={onChangeSelectedOrderId} />
            </div>
        )
    }
}