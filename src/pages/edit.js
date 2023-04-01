import React from "react";
import ReactDOM from "react-dom/client";
import { Edit } from "../components/EditTab";
import { DualButton } from "../components/DualButton";
import "../styles/styles.css";


function ProductEdit() {
  return (
    <>
    <div className="container">
      <div className="my-5">
    <h1>Edit Product</h1>
      <Edit />
      {/* <hr />

      <DualButton text={"Submit"} style={ButtonSytle}/> */}
      </div>
    </div>
    </>
  );
}

export default ProductEdit;
