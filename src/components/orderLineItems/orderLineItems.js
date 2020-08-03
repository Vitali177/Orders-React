import React, {Component} from 'react';
import Spinner from '../spinner';

import './orderLineItems.css';

export default class OrderLineItems extends Component {

    state = {
        products: null,
        loading: true
    }

    async componentWillReceiveProps(nextProps) {
        if (nextProps.order !== null && JSON.stringify(nextProps.order) !== JSON.stringify(this.props.order)) {
            const {id} = nextProps.order;
            let url = `${window.location.origin}/api/Orders/${id}/products`;  

            if (process.env.NODE_ENV === 'development') {
                url = `http://localhost:8080/api/Orders/${id}/products`;
            }

            const res = await fetch(url);
            const data = await res.json();
            await (() => {
                this.setState({products: data, loading: false})
            })();
        }
    }

    render() {
        const {products, loading} = this.state;

        const spinner = loading ? <Spinner /> : null;
        // const content = (!loading && !products && products.length) ? products.map((prod) => <OrderProduct data={prod} key={prod.id} />) : null; 

        return (
            <section className="order__line-items">
                <div className="order__line-items-header">
                    <h4 className="order__line-items-heading">Line Items (<span></span>)</h4>
                    <div className="form-wrapper">
                        <form action="#" className="order__line-items-form">
                            <input type="search" className="order__line-items-input-search" placeholder="Search" />
                            <div className="order-list__button-search">
                                <input type="submit" value="" />
                            </div>
                            <div className="order-list__button-refresh"></div>
                        </form>
                        <div className="order__line-items-button-add-products plus-animation"></div>
                    </div>                    
                </div>                
                <ul className="order__line-list">
                    <div className="order__line-list-row order__line-list-row--headline">
                        <li className="product">Product<div className="sort-picture"></div></li>
                        <li className="unit-price">Unit Price<div className="sort-picture"></div></li>
                        <li className="quantity">Quantity<div className="sort-picture"></div></li>
                        <li className="total">Total<div className="sort-picture"></div></li>
                        <li className="delete-product"></li>
                    </div>
                    <div className="wrapper">
                        {spinner}
                        {/* {content} */}
                    </div>                    
                </ul>
            </section>
        )
    }
}