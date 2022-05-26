import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

const [showCart, setshowCart]=useState(false);

const showCartHandler=()=>{
    setshowCart(true);
}

const closeCartHandler=()=>{
  setshowCart(false);
}

  return (
    <CartProvider>
      {showCart && <Cart onClose={closeCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;
