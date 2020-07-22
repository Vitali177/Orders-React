import React, {Component} from 'react';
import OrderMainInfo from '../orderMainInfo';

import './order.css';

export default class Order extends Component {

    state = {
        selectedOrder: null
    }

    async componentDidMount() {
        const defaultId = 1;

        let url = `${window.location.origin}/api/Orders/${defaultId}`;  

        if (process.env.NODE_ENV === 'development') {
            url = `http://localhost:8080/api/Orders/${defaultId}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        await (() => {
            this.setState({selectedOrder: data});
        })();   
    }

    render() {
        const selectedOrder = this.state;

        return (
            <main className="order">
                <OrderMainInfo order={selectedOrder}/>
            </main>
        )
    }
}