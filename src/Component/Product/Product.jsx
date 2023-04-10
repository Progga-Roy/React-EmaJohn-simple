import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,price,seller,ratings} =props.product;
    const handleAddToCart= props.handleAddToCart;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-detail'>
           <h6>{name}</h6>
            <p>Price :${price}</p>
            <p>Manufacture :{seller}</p>
             <p>Rating:{ratings} stars</p>
           
           </div>
           <button onClick={()=>{handleAddToCart(props.product)}} className='cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;