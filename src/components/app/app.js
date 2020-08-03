import React, {Component} from 'react';
import Header from '../header';
import Order from '../order';
import Footer from '../footer';

import './app.css';

export default class App extends Component {

    render() {
        return (
            <>
                <Header />
                <Order />
                <Footer />
            </>            
        );
    }    
};