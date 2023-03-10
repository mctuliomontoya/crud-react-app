import React, { useState } from "react";
import ReactDOM from 'react-dom/client'
import { Navbar } from "../components/Navbar";
import { ListRow } from '../components/ListRow';
import StockImage from "../images/StockImage.png";
import '../styles/List.css';

function List() {
  

  return(
    <>
    <Navbar title="SISWEB" />
    <div class="container text-start col-md-10 offset-md-1">
      <h1 class="my-4 justify-content-center ms-0">Products</h1>
      <hr></hr>
      <button type="button" class="CreateNewRowButton my-3">ADICIONAR PRODUCTO</button>
      <hr></hr>

      <table class="table">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>TYPE</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>IN STOCK</th>
                  <th>IMAGE</th>
              </tr>
          </thead>
          <ListRow/>
          <tbody class="table-group-divider">
              
          </tbody>
      </table>
    </div>
       
    </>
  )
}
export default List;