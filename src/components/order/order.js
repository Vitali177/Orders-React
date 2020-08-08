import React, {useState, useEffect} from 'react';
import OrderMainInfo from '../orderMainInfo';
import OrderAddress from '../orderAddress';
import OrderProcessor from '../orderProcessor';
import OrderMap from '../orderMap';
import OrderLineItems from '../orderLineItems';

import './order.css';
function Order({idSelectedOrder}) {

    const [loading, setLoading] = useState(true);
    const [selectedOrder, changeSelectedOrder] = useState(null);
    const [indexTabSelected, changeIndexTabSelected] = useState(0);    

    useEffect(() => {
        async function fetchOrder() {
            setLoading(true);

            let url = `${window.location.origin}/api/Orders/${idSelectedOrder}`;  
    
            if (process.env.NODE_ENV === 'development') {
                url = `http://localhost:8080/api/Orders/${idSelectedOrder}`;
            }
    
            const res = await fetch(url);
            const data = await res.json();
    
            await (() => {
                changeSelectedOrder(data);
                setLoading(false);
            })(); 
        }
        fetchOrder();
    }, [idSelectedOrder]);

    const onChangeSelectedTab = (index) => {
        if (indexTabSelected !== index) {
            changeIndexTabSelected(index);
        }
    } 

    return (
        <main className="order" >
            <OrderMainInfo 
                order={selectedOrder} 
                indexTabSelected={indexTabSelected}
                onChangeSelectedTab={onChangeSelectedTab}
                loading={loading}
            />                                
            <OrderAddress 
                order={selectedOrder} 
                indexTab={0} 
                indexTabSelected={indexTabSelected}
                loading={loading}
            />
            <OrderProcessor 
                order={selectedOrder} 
                indexTab={1} 
                indexTabSelected={indexTabSelected}
            />
            <OrderMap 
                order={selectedOrder} 
                indexTab={2} 
                indexTabSelected={indexTabSelected} 
            />
            <OrderLineItems 
                order={selectedOrder} 
                loadingOrder={loading}
            />
        </main>
    )    
}

export default Order;