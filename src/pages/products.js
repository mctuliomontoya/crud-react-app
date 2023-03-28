import React from "react";
import ReactDOM from "react-dom/client";
import { Product } from "../components/ProductTab";
import { DualButton } from "../components/DualButton";
import { Navbar } from "../components/Navbar";
import "../styles/styles.css";

function Greeting() {
  return <h1>Hello world</h1>;
}
 
function Products() {
  return (
    <>
    <Navbar title="SISWEB" />
    <div className="container">
      <Product />
      {/* <hr />

      <DualButton text={"Submit"} style={ButtonSytle}/> */}
    </div>
    </>
  );
}

export default Products;
