import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeItem } from 'localforage';
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../utilities/fakeDb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCreditCard } from '@fortawesome/free-solid-svg-icons'


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
    const handleClearCart=()=>{
         setCart([]);
         deleteShoppingCart();
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
            <Cart cart={cart} handleClearCart={handleClearCart}>
             <Link to='/checkout'>
              <button className='proceed-btn' >Proceed checkout <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> </button>
             </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Orders;