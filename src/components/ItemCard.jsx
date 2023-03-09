import { ShopButton } from "./ShopButton";
import '../styles/shop.css'
import cosmetic from "./../images/cosmetic.png"

export function ItemCard({ID, name, stock, price, imageUrl}) {
    return (
        <div class="item">
            <img src={cosmetic} alt={imageUrl}/>
            <div class="itemText">
                <h6><b>PRODUCT ID:{ID}</b></h6>
                <h5>{name}</h5>
                <h6><b>IN STOCK:</b> {stock} UNITS</h6>
                <h5 class="price">
                    ${price}
                </h5>

                <div class="qtyInput">
                    <label htmlFor="quantity">Qty:</label>
                    <input type="number" name="quantity" id="quantity" required defaultValue="1"/>
                </div>
                <ShopButton text="ADD TO CART" cartIcon={true}/>
            </div>
        </div>
    )
}