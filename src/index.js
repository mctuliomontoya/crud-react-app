import React from "react";
import ReactDOM from "react-dom/client";
import {Button} from "./Button";
import { DualButton } from "./components/DualButton";
import {Navbar} from "./components/Navbar"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
    return <h1>Hello world</h1>
}

root.render(
    <>
    <Navbar title="SISWEB"/>
    <Greeting />
    <DualButton text="Push Me!" style={true}/>
    
    <DualButton text="Push Me!" style={false}/>
    </>
);