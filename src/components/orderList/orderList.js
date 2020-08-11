import React, {useState, useEffect} from 'react';
import OrderListItem from '../orderListItem/';
import Spinner from '../spinner/';

import './orderList.css';

function OrderList({idSelectedOrder, onChangeSelectedOrderId}) {

    const [loading, setLoading] = useState(true);
    const [orderList, setOrderList] = useState(null);
    const[searchText, setSearchText] = useState('');

    useEffect(() => {        
        fetchOrderList(searchText);
    }, []);

    async function fetchOrderList(searchText) {
        setLoading(true);

        let url = `${window.location.origin}/api/Orders`;

        if (process.env.NODE_ENV === 'development') {
            url = 'http://localhost:8080/api/Orders';
        }

        const res = await fetch(url);
        const data = await res.json();

        await (() => {
            const criteria = ["id", "ZIP", "address", "country", "createdAt", "email", "firstName",
                "lastName", "phone", "region", "shippedAt", "status"];

            let matchesOrders = data.filter((order) => {
                const regex = new RegExp(`^${searchText}`, "gi");
        
                for (let i = 0; i < criteria.length; i++) {
                    if ( `${order[criteria[i]]}`.match(regex)) {
                        return 1;
                    }
                } 
            });

            setOrderList(matchesOrders);
            setLoading(false);
        })();   
    }

    function searchOrders(e) {
        e.preventDefault();
        fetchOrderList(searchText);
    }    

    const spinner = loading ? <Spinner /> : null; 
    const items = !loading ? orderList.map((order) => <OrderListItem 
            order={order} 
            key={order.id} 
            idSelectedOrder={idSelectedOrder} 
            onChangeSelectedOrderId={onChangeSelectedOrderId} />)
        : null;

    return (            
        <section className="order-list">
            <div className="order-list__header">
                <div className="order-list__header-row">
                    <button className="order-list__button-back"></button>
                    <h3>Orders (<span>{orderList ? orderList.length : 0}</span>)</h3>
                </div>                    
                <form action="#" className="order-list__form" onSubmit={searchOrders}>
                    <input 
                        type="search" 
                        className="order-list__input-search" 
                        value={searchText}
                        placeholder="Search" 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="order-list__button-search">
                        <input type="submit" value="" />
                    </div>
                    <div className="order-list__button-refresh"></div>
                </form>
            </div>
            <div className="order-list__main">
                {spinner}
                {items}
            </div>
            <div className="order-list__footer">
                <div className="order-list__footer-button-create-order plus-animation"></div>
            </div>
        </section>
    )  
}

export default OrderList;