import React from "react";
import ReactDOM from "react-dom/client";
import {Product} from "../components/ProductTab";
import { DualButton } from "../components/DualButton";
import {Navbar} from "../components/Navbar"
import "../styles/styles.css";

function Greeting() {
    return <h1>Hello world</h1>
}

function Products() {
    return(
        <>
    <Navbar title="SISWEB"/>
    <Product/>
    <DualButton text="Push Me!" style={true}/>
    
    <DualButton text="Push Me!" style={false}/>
    </>
    );
}

export default Products;