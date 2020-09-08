import React, {useState, useEffect} from 'react';
import OrderProduct from '../orderProduct';
import Spinner from '../spinner';
import NoProducts from '../noProducts';

import './orderLineItems.css';

function OrderLineItems({order, loadingOrder}) {
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [products, setProducts] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [sortingCriterion, setSortingCriterion] = useState(null);
    const [sortingDirection, setSortingDirection] = useState(null);

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

                criteria.forEach((item) => `${order[item]}`.match(regex) ? isMatched = true : null);                
                return isMatched;
            });
            setProducts(matchesProducts);
            setLoadingProducts(false);
        })();  
    }

    async function deleteProduct(productId, productQuantity) {
        const index = products.findIndex(({ id, quantity }) => id === productId && quantity === productQuantity);
        setProducts([...products.slice(0, index), ...products.slice(index + 1)]);

        const orderId = order.id;
        let url = `${window.location.origin}/api/OrderProducts/${orderId}/${productId}?quantity=${productQuantity}`;  
    
        if (process.env.NODE_ENV === 'development') {
            url = `http://localhost:8080/api/OrderProducts/${orderId}/${productId}?quantity=${productQuantity}`;
        }
  
        fetch(url, {method: "DELETE", mode: 'cors', cache: 'no-cache', credentials: 'same-origin'});
    }

    function searchProducts(e) {
        e.preventDefault();
        setSortingCriterion(null);
        setSortingDirection(null);
        fetchProducts();
    }

    function onSortingProducts(criterion) {
        if (criterion === sortingCriterion) {
            sortingDirection === null 
                ? setSortingDirection('ASC') 
                : sortingDirection === 'ASC' 
                    ? setSortingDirection('DESC')
                    : setSortingDirection(null);
        } else {
            setSortingDirection('ASC');
        }
        setSortingCriterion(criterion);
    }

    function getClassSortingButton(name) {
        return (sortingCriterion === name && sortingDirection !== null)
            ? sortingDirection === 'ASC' 
                ? 'sort-picture sort-picture--ASC' 
                : 'sort-picture sort-picture--DESC'
            : 'sort-picture';
    }    

    function getSortedProducts() {
        const classesSortingCriterion = ["product", "unit-price", "quantity", "total"];
        const criteria = ["productName", "price", "quantity", "totalPrice"];
        const criterion = criteria[classesSortingCriterion.indexOf(sortingCriterion)];

        return [...products].sort((a, b) => {
            const value1 = a[criterion];
            const value2 = b[criterion];

            if (criterion === 'productName') {
                if (sortingDirection === 'DESC') {
                    if (value2 > value1) return 1;
                    return (value2 < value1) ? -1 : 0;
                } else {
                    if (value1 > value2) return 1;
                    return (value1 < value2) ? -1 : 0;
                }
            } else return (sortingDirection === 'DESC') ? (value1 - value2) : (value2 - value1); 
        });
    }

    function getProducts() {
        if (sortingDirection === null) return products.map((prod) => <OrderProduct data={prod} key={prod.id} deleteProduct={deleteProduct} />);
        return getSortedProducts().map((prod) => <OrderProduct  data={prod} key={prod.id} deleteProduct={deleteProduct} />);
    }

    const spinner = (loadingProducts || loadingOrder) ? <Spinner /> : null;
    const content = (!loadingProducts && !loadingOrder) ? getProducts() : null; 

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
                    <li 
                        className="product" 
                        onClick={() => onSortingProducts('product')}>
                        Product
                        <div className={getClassSortingButton('product')}></div>
                    </li>
                    <li 
                        className="unit-price" 
                        onClick={() => onSortingProducts('unit-price')}>
                        Unit Price
                        <div className={getClassSortingButton('unit-price')}></div>
                    </li>
                    <li 
                        className="quantity" 
                        onClick={() => onSortingProducts('quantity')}>
                        Quantity
                        <div className={getClassSortingButton('quantity')}></div>                  
                    </li>
                    <li 
                        className="total" 
                        onClick={() => onSortingProducts('total')}>
                        Total
                        <div className={getClassSortingButton('total')}></div>
                    </li>
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