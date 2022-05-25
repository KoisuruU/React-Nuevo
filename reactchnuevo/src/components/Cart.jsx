import { Link } from "react-router-dom";
import { UseCartContext } from "../context/cartContext.jsx";
import CartItem from "./CartItem";
import "../components/styles/Cart.css";

export default function Cart() {
    const {cartList, clearCart, totalPrice, totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <h1>Your cart is empty!</h1>
                <Link to='/'>
                    <button>Continue shopping</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1 className="cart__title">Your cart:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            <p>{`Total cost: US$${totalPrice}`}</p>
            <p>{`Amount of items: ${totalItems}`}</p>
            <button onClick={clearCart}>Empty your cart</button>
        </div>
    );
}
