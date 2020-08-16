import React, {Component, useState} from 'react';
import Spinner from '../spinner/';

import './orderProcessor.css';

const OrderProcessor = ({order, indexTab, indexTabSelected, onModifyOrderInfo}) => {
    const [isModifyInputs, setIsModifyInputs] = useState(false);

    const spinner = !order ? <Spinner /> : null;
    const content = order ? <View order={order} isModifyInputs={isModifyInputs} onModifyOrderInfo={onModifyOrderInfo} /> : null; 

    let sectionClassNames = 'order__processor';
    sectionClassNames += indexTab === indexTabSelected ? ' tab--selected' : '';

    return (
        <section className={sectionClassNames}>
            <div className="order__address-header"> 
                <h4 className="order__processor-heading address-processor-heading">Customer Info</h4>
                <div 
                    className={isModifyInputs ? 'button-edit-display button-edit-display--active' : 'button-edit-display'}  
                    onClick={() => setIsModifyInputs((prevState) => !prevState)}
                >
                    {isModifyInputs ? 'Display' : 'Edit'}
                </div>
            </div>
            <ul className="order__processor-list order__address-list">
                {spinner}
                {content}
            </ul>
        </section>        
    )
}

class View extends Component {

    state = {
        firstName: this.props.order.firstName, 
        lastName: this.props.order.lastName, 
        address: this.props.order.address, 
        phone: this.props.order.phone,
        email: this.props.order.email
    }  

    componentDidUpdate() {
        const {isModifyInputs, onModifyOrderInfo} = this.props;

        if (!isModifyInputs) {
            const {firstName, lastName, address, phone, email} = this.state;
            onModifyOrderInfo({firstName, lastName, address, phone, email});
        }
    }

    render() {
        const {isModifyInputs} = this.props;
        const {firstName, lastName, address, phone, email} = this.state;

        return (
            <>
                <div className="box">
                    <li className="order__address-item">First Name:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'firstName is-modify' : 'firstName'} 
                        value={firstName}
                        onChange={(e) => this.setState({firstName: e.target.value})}    
                        readOnly={!isModifyInputs}  
                    />
                </div>
                <div className="box">
                    <li className="order__address-item">Last Name:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'lastName is-modify' : 'lastName'} 
                        value={lastName}
                        onChange={(e) => this.setState({lastName: e.target.value})}    
                        readOnly={!isModifyInputs}  
                    />
                </div>
                <div className="box">
                    <li className="order__address-item">Address:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'address is-modify' : 'address'} 
                        value={address}
                        onChange={(e) => this.setState({address: e.target.value})}    
                        readOnly={!isModifyInputs}  
                    />
                </div>
                <div className="box">
                    <li className="order__address-item">Phone:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'phone is-modify' : 'phone'} 
                        value={phone}
                        onChange={(e) => this.setState({phone: e.target.value})}    
                        readOnly={!isModifyInputs}  
                    />
                </div>
                <div className="box">
                    <li className="order__address-item">Email:</li>
                    <input 
                        type="text" 
                        className={isModifyInputs ? 'order-input-country is-modify' : 'order-input-country'}
                        value={email}
                        onChange={(e) => this.setState({email: e.target.value})}    
                        readOnly={!isModifyInputs}  
                    />
                </div>
            </>        
        )
    }    
}

export default OrderProcessor;