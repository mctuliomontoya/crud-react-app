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
    <div className="container text-start col-md-10 offset-md-1">
      <h1 className="my-4 justify-content-center ms-0">Products</h1>
      <hr></hr>
      <button type="button" className="CreateNewRowButton my-3">ADICIONAR PRODUCTO</button>
      <hr></hr>

      <table className="table">
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
          <tbody className="table-group-divider">
              
          </tbody>
      </table>
    </div>
       
    </>
  )
}
export default List;