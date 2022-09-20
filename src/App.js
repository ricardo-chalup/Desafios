import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import ItemListContainer from "../src/components/ItemListContainer.jsx/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemListContainer.jsx/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from './Context/CartContext';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId"
            element={<ItemListContainer />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
   );
  }
          


export default App;
