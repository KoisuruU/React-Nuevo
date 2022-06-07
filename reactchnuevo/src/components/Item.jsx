import { Link } from "react-router-dom";
import '../components/styles/Item.css';

export default function Item({el}) {

    return (
        <div className="item">
            <img className="item__img" src={el.img} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <p className='item__category'>{el.category}</p>
                <h3 className="item__title">{el.name}</h3>
                <p className='item__stock'>{`Stock: ${el.stock}`}</p>
                <p className='item__price'>{`Price: $${el.price}`}</p>
                <Link to={`/itemDetail/${el.id}`}>
                    <button className="item__addBtn" >Add to cart</button>
                </Link>
            </div>
        </div>
        
    );
}