import React from "react";
import ReactDOM from "react-dom";
import {Button} from "./Button";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
    return <h1>Hello world</h1>
}

root.render(
    <>
    <Greeting />
    <Button text="Hola"/>
    <Button text="Hola 2"/>
    <Button text="andre"/>
    </>
);