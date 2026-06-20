import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import { useState } from "react";


function App() {
  
  const[cart,setCart]=useState([]);

   const addToCart = (product) => {
    setCart([...cart, product]);
  };


  return (

    <BrowserRouter>
    <Navbar cartCount={cart.length}/>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}  />} />
        <Route path="/cart" element={<Cards cart={cart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;