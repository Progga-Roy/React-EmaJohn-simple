import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveItem}) => {
    return (
        <div className='reviewItem'>
          <img src={product.img} alt="" />

          <div className='review-details'>
          
           <p className='name'>{product.name}</p>
            <p>Price :<span className='color'> ${product.price}</span> </p>
            <p>Order quantity:<span className='color'> ${product.quantity}</span></p>
           </div>

           <button onClick={()=>{handleRemoveItem(product.id)}} className='delete-btn'> <FontAwesomeIcon icon={faTrashAlt} className='btn'></FontAwesomeIcon></button>
         
         
        </div>
    );
};

export default ReviewItem;