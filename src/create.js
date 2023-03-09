import React from "react";
import ReactDOM from "react-dom/client";
import {Product} from "./components/ProductTab";
import { DualButton } from "./components/DualButton";
import {Navbar} from "./components/Navbar"
import "./styles/styles.css";
import BasicExample from "./components/BasicForm";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
    return <h1>Hello world</h1>
}

root.render(
    <>
    <Navbar title="SISWEB"/>
    <Product/>
    
    {/* <DualButton text="Push Me!" style={true}/>
    
    <DualButton text="Push Me!" style={false}/> */}
    </>
);