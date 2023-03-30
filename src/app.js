import React from 'react'
import ReactDOM from "react-dom/client";
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
          <Route index element={<Login />} />
          <Route path="products" element={Products()} />
          <Route path="shop" element={Shop()} />
          <Route path="list" element={Table()} />
          <Route path="*" element={Table()} />
      </Routes>
    </BrowserRouter>
  );
}