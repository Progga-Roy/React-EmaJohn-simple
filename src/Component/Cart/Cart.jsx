import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    // const cart =props.cart
    // const {cart} = props.cart
    
    let total =0;
    let totalShipping =0;
    let quantity = 0;
    for (const product of cart) {
        if(product.quantity === 0){
            product.quantity = 1;
        }
        total = total+product.price*product.quantity;
        totalShipping=totalShipping+product.shipping;
        quantity = quantity+product.quantity
    }
     let tax= total*7/100;
    let grandTotal = total+totalShipping+tax
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
              <div className="cart-item">
              <p>Selected Items:{quantity}</p>
               <p>Total price : $ {total}</p>
               <p>Total Shopping Charge : $ {totalShipping}</p>
               <p>Tax: {tax}</p>
               <h3>Grand Total: $ {grandTotal.toFixed(2)} </h3>
              </div>

        </div>
    );
};

export default Cart;