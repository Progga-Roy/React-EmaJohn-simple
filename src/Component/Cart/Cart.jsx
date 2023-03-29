import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart =props.cart
    // const {cart} = props.cart
    let total =0;
    for (const product of cart) {
        total = total+product.price
    }
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
              <div className="cart-item">
              <p>Selected Items:{cart.length}</p>
               <p>Total price :{total} $</p>
               <p>Total Shopping Charge :</p>
               <p>Tax:</p>
               <h3>Grand Total: </h3>
              </div>

        </div>
    );
};

export default Cart;