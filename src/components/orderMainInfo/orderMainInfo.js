import React, {Component} from 'react';
import Spinner from '../spinner/';

import './orderMainInfo.css';
export default class OrderMainInfo extends Component {
    render() {
        const order = this.props.order.selectedOrder;

        const spinner = !order ? <Spinner /> : null;
        const content = order ? <View order={order} /> : null; 

        return (
            <section className="order__main-info">
                <div className="wrapper">    
                    {spinner}
                    {content}
                </div>                            
                <div className="order__buttons">
                    <div className="order__button order__button-address order__button--selected"></div>
                    <div className="order__button order__button-processor"></div>
                    <div className="order__button order__button-map"></div>
                </div>
            </section>
        )
    }
}

const View = ({order}) => {
    const {id, totalPrice, firstName, lastName, createdAt, shippedAt} = order;
    return (
        <>
            <div className="order__row">
                <h3 className="order__name">Order <span>{id}</span></h3>
                <div className="order__cost">
                    <h3 className="order__cost-value">{(+totalPrice).toFixed(2)}</h3>
                    <span>EUR</span>
                </div>
            </div>
            <ul className="order__main-info-list">
                <li className="order__customer">Customer: <span>{firstName} {lastName}</span></li>
                <li className="order__ordered">Ordered: <span>{createdAt}</span></li>
                <li className="order__shipped">Shipped: <span>{shippedAt}</span></li>
            </ul>
        </>
    )
}