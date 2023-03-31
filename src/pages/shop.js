import React from "react";
import ReactDOM from "react-dom/client";
import { ItemCard } from "../components/ItemCard";
import { ShoppingCart } from "../components/ShoppingCart";
import {Navbar} from "../components/Navbar";
import "../styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
    return <h1>Shop</h1>
}

function Shop() {
    return(
    <>
    <main>
    <Greeting/>
    <hr></hr>
        <div className="content">
            <div>
                <ItemCard ID="COS01" name="Sephora Skin Care - 1 u" stock="4" price="45.50" imageUrl="./../public/cosmetic.png"/>
                <ItemCard ID="COS01" name="Sephora Skin Care - 1 u" stock="4" price="45.50" imageUrl="./../public/cosmetic.png"/>
            </div>
            <ShoppingCart/>
        </div>
    </main>    
    </>
    )
}

export default Shop;