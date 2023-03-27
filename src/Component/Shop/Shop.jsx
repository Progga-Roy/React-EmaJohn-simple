import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] =useState([])
    useEffect(()=>{
        fetch('../../../public/fakeData/products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
      const newCart = [...cart,product]
      setCart(newCart)
     }
    return (
        <div className='shop-container'>
            <div className="product-container">
              {/* <h4>Product :{products.length}</h4> */}
              {
                products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
              }
            </div>
            <div className="cart-container">
               <h4>Order Summary</h4>
               <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;