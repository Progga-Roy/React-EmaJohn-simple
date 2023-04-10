import { getShoppingCart } from "../Component/utilities/fakeDb";

const cartProductLoader = async()=> {
  const loadedProducts = await fetch('/public/fakeData/products.json')
  const products = await loadedProducts.json()
  console.log(products);
//   if cart data is in database , you have to use async await

const storedCart = getShoppingCart()
const savedCart = [];
for(const id in storedCart){
    const addedProduct = products.find(pd=>pd.id === id)
    if(addedProduct){
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
    }
}
// return[products,savedCart]
// return{products,savedCart}
  return savedCart;
}

export default cartProductLoader;