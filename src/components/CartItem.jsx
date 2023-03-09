import '../styles/shop.css'

export function CartItem({ID, qty, title, price}) {
    return (
        <div className="cartItem">
            <div className="itemTitle">
                <input type="checkbox" name="" id={ID}/>
                <div className="text">
                    {qty}
                </div>
                <div className="text">
                    {title}
                </div>
            </div>
            <b>${price}</b>
        </div>
    )
}