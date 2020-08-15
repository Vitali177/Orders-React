import React, {Component, useState} from 'react';
import Spinner from '../spinner/';

import './orderAddress.css';

const OrderAddress = ({order, indexTab, indexTabSelected, loading}) => {
    const [isModifyInputs, setIsModifyInputs] = useState(false);

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <View order={order} isModifyInputs={isModifyInputs} /> : null; 

    let sectionClassNames = 'order__address';
    sectionClassNames += indexTab === indexTabSelected ? ' tab--selected' : '';

    return (
        <section className={sectionClassNames}>
            <div className="order__address-header"> 
                <h4 className="order__address-heading address-processor-heading">Shipping Address</h4>
                <div 
                    className={isModifyInputs ? 'button-edit-display button-edit-display--active' : 'button-edit-display'}  
                    onClick={() => setIsModifyInputs((prevState) => !prevState)}
                >
                    {isModifyInputs ? 'Display' : 'Edit'}
                </div>
            </div>
            <ul className="order__address-list">
                {spinner}
                {content}
            </ul>
        </section>
    )
}

class View extends Component {

    state = {
        address: this.props.order.address, 
        ZIP: this.props.order.ZIP, 
        region: this.props.order.region, 
        country: this.props.order.country
    }    

    render() {
        const {order, isModifyInputs} = this.props;
        const {address, ZIP, region, country} = this.state;

        return (
            <>
                <div className="box">
                    <li className="order__address-item">Street:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'address is-modify' : 'address'} 
                        value={address} 
                        onChange={(e) => this.setState({address: e.target.value})}                    
                        readOnly={!isModifyInputs} 
                    />
                </div>
                <div className="box">
                    <li className="order__address-item">ZIP Code / City:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'ZIP is-modify' : 'ZIP'} 
                        value={ZIP}
                        onChange={(e) => this.setState({ZIP: e.target.value})}    
                        readOnly={!isModifyInputs} 
                    />
                </div>
                <div className="box">
                    <li className="order__address-item">Region:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'region is-modify' : 'region'} 
                        value={region}
                        onChange={(e) => this.setState({region: e.target.value})}    
                        readOnly={!isModifyInputs} 
                    />
                </div>
                <div className="box">
                    <li className="order__address-item">Country:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'country is-modify' : 'country'} 
                        value={country} 
                        onChange={(e) => this.setState({country: e.target.value})}    
                        readOnly={!isModifyInputs} 
                    />
                </div>
            </>        
        )
    }  
}

export default OrderAddress;