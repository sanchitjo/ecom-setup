import './App.css';
import Header from './header';
import Card from './card';
import CartItem from './cartItem';
import { useState } from 'react';
function App() {

  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Product 1",
      description: "lorem",
      price: 20
    },
    {
      id: 2,
      title: "Product 2",
      description: "lorem",
      price: 40
    },
    {
      id: 3,
      title: "Product 3",
      description: "lorem ipsum",
      price: 70
    },
    {
      id: 4,
      title: "Product 4",
      description: "lorem ipsum",
      price: 170
    },
    {
      id: 5,
      title: "Product 5",
      description: "lorem ipsum",
      price: 115
    },
    {
      id: 6,
      title: "Product 6",
      description: "lorem ipsum",
      price: 85
    },
  ])

  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (id) => {
    let prod = products.find(obj => obj.id == id)
    setCartItem([...cartItems, prod]);
    setTotal(total + prod.price);
  }

  let removeItem = (id) => {
    let result = window.confirm("Are you sure?");
    if(result) {
      let cartIndex = cartItems.findIndex(obj => obj.id == id);
      setTotal(total - cartItems[cartIndex].price)
      cartItems.splice(cartIndex, 1);
      setCartItem([...cartItems])
    }
  }

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {
                products.map((thingsToBuy) => {
                  return (<Card data={thingsToBuy} handleCart={addToCart} />)
                })
              }

            </div>
          </div>

          <div className="col-lg-4">
            <ol class="list-group list-group-numbered">
              
              {
                cartItems.length == 0 ? <h3>No items in cart</h3> : null
              }
              {
                cartItems.map((addedToCart) => {
                  return (<CartItem handleRemove={removeItem} data={addedToCart}/>)
                })
              }

              <h1>Your total - Rs. {total}/-</h1>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
