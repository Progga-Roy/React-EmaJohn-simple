import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('../../../public/fakeData/products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
              {/* <h4>Product :{products.length}</h4> */}
              {
                products.map(product=><Product product={product}></Product>)
              }
            </div>
            <div className="cart-container">
               <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;