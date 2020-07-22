import React, {Component} from 'react';
import OrderMainInfo from '../orderMainInfo';

import './order.css';

export default class Order extends Component {

    state = {
        selectedOrder: null
    }

    render() {
        return (
            <main className="order">
                <OrderMainInfo />
            </main>
        )
    }
}