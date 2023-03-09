import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,
RouterProvider,
Route,
Link } from 'react-router-dom';
import Login from './pages/login.js';
import Products from './pages/products.js';
import Shop from './pages/shop.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "products",
    element: Products(),
  },
  {
    path: "shop",
    element: Shop(),
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
