import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login.js';
import Products from './pages/products.js';
import Shop from './pages/shop.js';
import Table from './pages/List.js';
import {Navbar} from "./components/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<Navbar />}>
            <Route path="products" element={Products()} />
            <Route path="shop" element={Shop()} />
            <Route path="list" element={Table()} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}