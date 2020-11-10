import React, { Component } from 'react';
import Header from '../header';
import Order from '../order';
import Footer from '../footer';
import CreateProductForm from '../createProductForm';
import CreateOrderForm from '../createOrderForm';

import { Provider } from 'react-redux';
import store from '../../redux/store';

import './app.css';

export default class App extends Component {

    state = {
        idSelectedOrder: 1,
        popUp: null
    }

    onCreateProductForm = () => {
        this.setState({popUp: <CreateProductForm onCloseForm={this.onCloseForm} />});
    }

    onCreateOrderForm = () => {
        this.setState({popUp: <CreateOrderForm onCloseForm={this.onCloseForm} />});
    }

    onCloseForm = () => {
        this.setState({popUp: null});
    }

    onChangeSelectedOrderId = (id) => {
        if (id !== this.state.idSelectedOrder) {
            this.setState({idSelectedOrder: id});
        }
    }

    deleteOrder = () => {
        this.setState({idSelectedOrder: 5})
    }

    render() {
        const { idSelectedOrder, popUp } = this.state;

        return (
            <Provider store={store}>
                <div className={popUp ? 'content-wrapper content-wrapper--blurred' : 'content-wrapper'}>
                    <Header 
                        idSelectedOrder={idSelectedOrder} 
                        onChangeSelectedOrderId={this.onChangeSelectedOrderId} 
                        onCreateOrderForm={this.onCreateOrderForm}
                    />
                    <Order 
                        idSelectedOrder={idSelectedOrder} 
                    />
                    <Footer
                        deleteOrder={this.deleteOrder}
                        onCreateProductForm={this.onCreateProductForm} 
                    />
                </div>    
                {popUp} 
            </Provider>       
        );
    }    
};
