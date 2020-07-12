import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <button className="header__button"></button>
                <h1>Order</h1>
                <section className="order-list">
                    <div className="order-list__header">
                        <div className="order-list__header-row">
                            <button className="order-list__button-back"></button>
                            <h3>Orders (<span>0</span>)</h3>
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

                    </div>
                    <div className="order-list__footer">
                        <div className="order-list__footer-button-create-order plus-animation"></div>
                    </div>
                </section>
            </div>
        )
  }
}