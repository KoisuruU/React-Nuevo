import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import CartWidget from './CartWidget';
import '../components/styles/NavBar.css';

export default function NavBar() {
    return (
        <header className="header">
            <Link to='/'>
                <img className="header__logo" src={logo} alt="" />
            </Link>
            <nav className="navBar">
                <ul className="navBar__list">
                    <Link to='/category/GirlGroups' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Girl Groups</li>
                    </Link>
                    <Link to='/category/BoyGroups' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Boy Groups</li>
                    </Link>
                    <Link to='/category/Soloists' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Soloists</li>
                    </Link>
                    <Link to='/category/Merch' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Merch</li>
                    </Link>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    );
}
