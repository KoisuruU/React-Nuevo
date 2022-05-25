import { UseCartContext } from "../context/cartContext";
import '../components/styles/CartItem.css';

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
    }
    
    return (
        <li>Item: {item.name} - Price: US${item.price} - Quantity: {item.quantity} - <span className="cart__remove-icon" onClick={removeItem}><i className="bi bi-bag-x-fill"></i></span></li>
    );
}