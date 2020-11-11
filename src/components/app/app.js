import React from 'react';
import Header from '../header';
import Order from '../order';
import Footer from '../footer';
import CreateProductForm from '../createProductForm';
import CreateOrderForm from '../createOrderForm';

import { connect } from 'react-redux';
import { onChangeSelectedOrderId, onCreateProductForm, onCreateOrderForm, onCloseForm } from '../../redux/actions/';

import './app.css';

function App({idSelectedOrder, popUp, onChangeSelectedOrderId, onCreateProductForm, onCreateOrderForm, onCloseForm}) {
    
    const deleteOrder = () => {
        // this.setState({idSelectedOrder: 5})
    }

    return (
        <>
            <div className={popUp ? 'content-wrapper content-wrapper--blurred' : 'content-wrapper'}>
                <Header 
                    idSelectedOrder={idSelectedOrder} 
                    onChangeSelectedOrderId={onChangeSelectedOrderId} 
                    onCreateOrderForm={onCreateOrderForm}
                />
                <Order 
                    idSelectedOrder={idSelectedOrder} 
                />
                <Footer
                    deleteOrder={deleteOrder}
                    onCreateProductForm={onCreateProductForm} 
                />
            </div>    
            {(popUp === 'product') ? <CreateProductForm onCloseForm={onCloseForm} />
                : (popUp === 'order') ? <CreateOrderForm onCloseForm={onCloseForm} /> : null}   
        </>  
    );
    
};

export default connect(
    ({ idSelectedOrder, popUp }) => ({idSelectedOrder, popUp}),
    {onChangeSelectedOrderId, onCreateProductForm, onCreateOrderForm, onCloseForm}
)(App);
