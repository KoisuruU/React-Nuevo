import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../context/cartContext";
import CartList from "./CartList";
import "../components/styles/Cart.css";

export default function Cart() {
    const {totalItems, orderId, createOrder} = UseCartContext();
    const [orderSent, setOrderSent] = useState(false)

    function sendOrderManage() {
        setOrderSent(true);
        createOrder();
    }
    
    if (!totalItems) {
        return (
            <div className="cart">
                {orderSent ? <h1>Order Sent! Order #: {orderId}</h1> : <h1>Your cart is empty</h1>}
                <Link to='/'>
                    <button>Keep shopping</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList sendOrderManage={sendOrderManage}/>
        </div>
    );
}






