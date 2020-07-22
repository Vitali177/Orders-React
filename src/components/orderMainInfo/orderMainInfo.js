import React, {Component} from 'react';

export default class OrderMainInfo extends Component {
    render() {
        return (
            <>
                <div className="wrapper">    

                </div>                            
                <div className="order__buttons">
                    <div className="order__button order__button-address order__button--selected"></div>
                    <div className="order__button order__button-processor"></div>
                    <div className="order__button order__button-map"></div>
                </div>
            </>
        )
        
    }
}