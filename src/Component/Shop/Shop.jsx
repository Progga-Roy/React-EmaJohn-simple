import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [shops,setShops] = useState([])
    useEffect(()=>{
        fetch('../../../public/fakeData/products.json')
        .then(res=> res.json())
        .then(data=>setShops(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
              <h4>Product :{shops.length}</h4>
            </div>
            <div className="cart-container">
               <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;