import React, {Component} from 'react';
import OrderMainInfo from '../orderMainInfo';
import OrderAddress from '../orderAddress';
import OrderProcessor from '../orderProcessor';
import OrderMap from '../orderMap';

import './order.css';

export default class Order extends Component {

    state = {
        selectedOrder: null,
        indexTabSelected: 2
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
        const {selectedOrder, indexTabSelected} = this.state;

        return (
            <main className="order">
                <OrderMainInfo order={selectedOrder} indexTabSelected={indexTabSelected} />                                
                <OrderAddress order={selectedOrder} indexTab={0} indexTabSelected={indexTabSelected} />
                <OrderProcessor order={selectedOrder} indexTab={1} indexTabSelected={indexTabSelected} />
                <OrderMap order={selectedOrder} indexTab={2} indexTabSelected={indexTabSelected} />
            </main>
        )
    }
}