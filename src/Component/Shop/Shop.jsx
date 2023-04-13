import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakeDb';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('../../../public/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  useEffect(() => {
    // step 1: get id
    const storedCart = getShoppingCart()
    const savedCart =[];
    //step 2: get the product using id
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id)
    //  step 3: add quantity
      if (addedProduct) {
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        // console.log(addedProduct)
        savedCart.push(addedProduct)
      }
      setCart(savedCart)
    }
   
  }, [products])
  const handleAddToCart = (product) => {
    // const newCart = [...cart, product]
    let newCart =[];
    const exist = cart.find(pd=>pd.id ===product.id);
    if(!exist){
     product.quantity = 1;
     newCart =[...cart,product]
    }
    else{
      exist.quantity = exist.quantity+1;
      const remaining = cart.filter(pd=>pd.id !== product.id);
        newCart = [...remaining,exist]
    }
    setCart(newCart)
    addToDb(product.id)
  }
  const handleClearCart=()=>{
    setCart([])
    deleteShoppingCart()
  }
  return (
    <div className='shop-container'>
      <div className="product-container">

        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
        
        <Link to="/orders">
        <button className='proceed-btn'>Review order <FontAwesomeIcon icon={faArrowRight} className='order-icon'></FontAwesomeIcon></button>
        </Link>
         </Cart>
      </div>
    </div>
  );
};

export default Shop;