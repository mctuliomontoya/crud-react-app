import React from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter,
RouterProvider,
Route,
Link } from 'react-router-dom';
import Login from './pages/login.js';
import Products from './pages/products.js';
import Shop from './pages/shop.js';
import Table from './pages/List.js';

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
  },
  {
    path: "List",
    element: Table(),
  }
]);



createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );