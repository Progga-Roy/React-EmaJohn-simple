import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {img,name,price,seller,ratings} =props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-detail'>
           <h6>{name}</h6>
            <p>Price :${price}</p>
            <p>Manufacture :{seller}</p>
             <p>Rating:{ratings} stars</p>
           
           </div>
           <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;