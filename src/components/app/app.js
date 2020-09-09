import React, {Component} from 'react';
import Header from '../header';
import Order from '../order';
import Footer from '../footer';
import CreateProductForm from '../createProductForm';

import './app.css';

export default class App extends Component {

    state = {
        idSelectedOrder: 1,
        popUp: null
    }

    onCreateOrderForm = () => {
        this.setState({popUp: <CreateProductForm onCloseForm={this.onCloseForm} />});
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
            <>
                <div className={popUp ? 'content-wrapper content-wrapper--blurred' : 'content-wrapper'}>
                    <Header 
                        idSelectedOrder={idSelectedOrder} 
                        onChangeSelectedOrderId={this.onChangeSelectedOrderId} 
                    />
                    <Order 
                        idSelectedOrder={idSelectedOrder} 
                    />
                    <Footer
                        deleteOrder={this.deleteOrder}
                        onCreateOrderForm={this.onCreateOrderForm} 
                    />
                </div>    
                {popUp} 
            </>       
        );
    }    
};
