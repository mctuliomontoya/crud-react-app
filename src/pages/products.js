import React from "react";
import ReactDOM from "react-dom/client";
import { Product } from "../components/ProductTab";
import { DualButton } from "../components/DualButton";
import "../styles/styles.css";


function Products() {
  return (
    <>
    <div className="container">
      <div className="my-5">
    <h1>Products</h1>
      <Product />
      {/* <hr />

      <DualButton text={"Submit"} style={ButtonSytle}/> */}
      </div>
    </div>
    </>
  );
}

export default Products;
