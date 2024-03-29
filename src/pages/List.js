import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "../components/Navbar";
import { ListRow } from "../components/ListRow";
import StockImage from "../images/StockImage.png";
import "../styles/List.css";

function List() {
  return (
    <>
      <div className="container text-start col-md-10 offset-md-1">
        <h1 className="my-4 justify-content-center ms-0">Products</h1>
        <hr className="mb-5"></hr>
        <a href="./products" className="CreateNewRowButton">
          ADICIONAR PRODUCTO
        </a>
        <hr className="mt-5"></hr>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>TYPE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th className="text-center">IN STOCK</th>
                <th className="text-center">IMAGE</th>
                <th></th>
              </tr>
            </thead>
            <ListRow />
            <tbody className="table-group-divider"></tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default List;
