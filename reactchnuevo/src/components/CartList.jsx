import { UseCartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import '../components/styles/CartList.css';

export default function CartList({sendOrderManage}) {
    const {cartList, clearCart, totalPrice} = UseCartContext();

    return (
        <div className="cartList">
            <h1 className="cart__title">Your Order:</h1>
            {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            <p>{`Total cost: $${totalPrice}`}</p>
            <button onClick={clearCart}>Empty cart</button>
            <button onClick={sendOrderManage}>Send order!</button>
        </div>
    );
}
