import React, {useState, useEffect} from 'react';
import OrderProduct from '../orderProduct';
import Spinner from '../spinner';
import NoProducts from '../noProducts';

import './orderLineItems.css';

function OrderLineItems({order, loadingOrder}) {

    const [loadingProducts, setLoadingProducts] = useState(true);
    const [products, setProducts] = useState(null);
    const[searchText, setSearchText] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            setLoadingProducts(true);

            const {id} = order;
            let url = `${window.location.origin}/api/Orders/${id}/products`;  

            if (process.env.NODE_ENV === 'development') {
                url = `http://localhost:8080/api/Orders/${id}/products`;
            }

            const res = await fetch(url);
            const data = await res.json();
            await (() => {
                setProducts(data);
                setLoadingProducts(false);
            })();
        }
        if (order !== null) {
            fetchProducts();
        }
    }, [order]);

    async function fetchProducts() {
        setLoadingProducts(true);

        const {id} = order;
        let url = `${window.location.origin}/api/Orders/${id}/products`;

        if (process.env.NODE_ENV === 'development') {
            url = `http://localhost:8080/api/Orders/${id}/products`;
        }

        const res = await fetch(url);
        const data = await res.json();

        await (() => {
            const criteria = ["id", "productName", "price", "quantity", "totalPrice"];

            let matchesProducts = data.filter((order) => {
                const regex = new RegExp(`^${searchText}`, "gi");
                let isMatched = false;
        
                for (let i = 0; i < criteria.length; i++) {
                    if ( `${order[criteria[i]]}`.match(regex)) {
                        isMatched = true;
                    }
                }
                return isMatched;
            });

            setProducts(matchesProducts);
            setLoadingProducts(false);
        })();  
    }

    function searchProducts(e) {
        e.preventDefault();
        fetchProducts();
    }

    const spinner = (loadingProducts || loadingOrder) ? <Spinner /> : null;
    const content = (!loadingProducts && !loadingOrder) ? products.map((prod) => <OrderProduct data={prod} key={prod.id} />) : null; 

    return (
        <section className="order__line-items">
            <div className="order__line-items-header">
                <h4 className="order__line-items-heading">Line Items 
                    (<span>{(products && !loadingOrder && !loadingProducts) ? products.length : 0}</span>)
                </h4>
                <div className="form-wrapper">
                    <form action="#" className="order__line-items-form" onSubmit={searchProducts}>
                        <input 
                            type="search" 
                            className="order__line-items-input-search" 
                            value={searchText}
                            placeholder="Search" 
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <div className="order-list__button-search">
                            <input type="submit" value="" />
                        </div>
                        <div className="order-list__button-refresh"></div>
                    </form>
                    <div className="order__line-items-button-add-products plus-animation"></div>
                </div>                    
            </div>                
            <ul className="order__line-list">
                <div className="order__line-list-row order__line-list-row--headline">
                    <li className="product">Product<div className="sort-picture"></div></li>
                    <li className="unit-price">Unit Price<div className="sort-picture"></div></li>
                    <li className="quantity">Quantity<div className="sort-picture"></div></li>
                    <li className="total">Total<div className="sort-picture"></div></li>
                    <li className="delete-product"></li>
                </div>
                <div className="wrapper">
                    {spinner}
                    {content ? (content.length ? content : <NoProducts />) : null}
                </div>                    
            </ul>
        </section>
    )    
}

export default OrderLineItems;