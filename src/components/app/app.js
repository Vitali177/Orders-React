import React, {Component} from 'react';
import Header from '../header';
import Order from '../order';
import Footer from '../footer';

import './app.css';

export default class App extends Component {

    state = {
        idSelectedOrder: 1
    }

    onChangeSelectedOrderId(id) {
        if (id !== this.state.idSelectedOrder) {
            this.setState({idSelectedOrder: id});
        }
    }

    render() {
        const {idSelectedOrder} = this.state;
        return (
            <>
                <Header 
                    idSelectedOrder={idSelectedOrder} 
                    onChangeSelectedOrderId={this.onChangeSelectedOrderId} 
                />
                <Order 
                    idSelectedOrder={idSelectedOrder} 
                />
                <Footer />
            </>            
        );
    }    
};