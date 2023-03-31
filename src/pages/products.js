import React from "react";
import ReactDOM from "react-dom/client";
import { Product } from "../components/ProductTab";
import { DualButton } from "../components/DualButton";
import "../styles/styles.css";

function Greeting() {
  return <h1>Hello world</h1>;
}
 
function Products() {
  return (
    <>
    <div className="container">
      <Product />
      {/* <hr />

      <DualButton text={"Submit"} style={ButtonSytle}/> */}
    </div>
    </>
  );
}

export default Products;
