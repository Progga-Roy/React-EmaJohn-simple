import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeItem } from 'localforage';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    console.log(savedCart)
    const [cart,setCart] = useState(savedCart)

    const handleRemoveItem = (id)=>{
      // console.log(id)
      const remainingItem = cart.filter(product=> product.id !== id)
      setCart(remainingItem)
     removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className="review-container">

              {
                cart.map(product =><ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)
              }
            </div>
            <div className="cart-container">
            {/* <Cart cart={cart}></Cart> */}
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;