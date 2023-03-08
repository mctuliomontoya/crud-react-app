import React from "react";
import ReactDOM from "react-dom";
import {Button} from "./Button";
import {Navbar} from "./components/Navbar"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
    return <h1>Hello world</h1>
}

root.render(
    <>
    <Navbar title="SISWEB"/>
    <Greeting />
    <Button text="Hola"/>
    <Button text="Hola 2"/>
    <Button text="andre"/>
    </>
);