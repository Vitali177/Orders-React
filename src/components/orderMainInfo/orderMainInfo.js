import React, {Component} from 'react';
import OrderButton from '../orderButton/';
import Spinner from '../spinner/';

import './orderMainInfo.css';
export default class OrderMainInfo extends Component {  

    state = {
        buttonsClassNames: ['order__button-address', 'order__button-processor', 'order__button-map']
    }

    render() {
        const {buttonsClassNames} = this.state;
        const {order, indexTabSelected, onChangeSelectedTab} = this.props;

        const spinner = !order ? <Spinner /> : null;
        const content = order ? <View order={order} /> : null; 

        const buttons = buttonsClassNames.map((className, idx) => <OrderButton className={className} 
            key={idx} index={idx} indexTabSelected={indexTabSelected} onChangeSelectedTab={onChangeSelectedTab} />);

        return (
            <section className="order__main-info">
                <div className="wrapper">    
                    {spinner}
                    {content}
                </div>                            
                <div className="order__buttons">
                    {buttons}
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
