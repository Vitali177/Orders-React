import React, {useState} from 'react';
import OrderList from '../orderList';

import './header.css';

function Header({idSelectedOrder, onChangeSelectedOrderId}) {

    const [isMenuOpen, setMenu] = useState(true);

    const onToggleMenu = (isOpen) => {
        if (isOpen) {
            document.body.classList.add('blocked');
            document.querySelector('.content-wrapper').classList.remove('content-wrapper--menu-hidden');
        } else {
            document.body.classList.remove('blocked');
            document.querySelector('.content-wrapper').classList.add('content-wrapper--menu-hidden');
        }
        setMenu(isOpen);
    }

    return (
        <div className="header">
            <button 
                className={isMenuOpen ? 'header__button header__button--hidden' : 'header__button'} 
                onClick={() => onToggleMenu(true)}>
            </button>
            <h1>Order</h1>
            <OrderList 
                idSelectedOrder={idSelectedOrder} 
                onChangeSelectedOrderId={onChangeSelectedOrderId}
                isMenuOpen={isMenuOpen}
                onToggleMenu={onToggleMenu}
            />
        </div>
    )    
}

export default Header;