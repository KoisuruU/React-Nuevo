import { Link } from "react-router-dom";
import '../components/styles/BuyButtons.css';

export default function BuyButtons() {
    
    return (
        <div className="buyButtons">
            <Link to='/cart'>
                <button className="buyButtons__goToCart">Go to cart</button>
            </Link>
            <Link to='/'>
                <button className="buyButtons__goToMenu">Continue Shopping</button>
            </Link>
        </div>
    );

}