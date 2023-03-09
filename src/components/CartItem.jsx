import '../styles/shop.css'

export function CartItem({ID, qty, title, price}) {
    return (
        <div class="cartItem">
            <div class="itemTitle">
                <input type="checkbox" name="" id={ID}/>
                <div class="text">
                    {qty}
                </div>
                <div class="text">
                    {title}
                </div>
            </div>
            <b>${price}</b>
        </div>
    )
}