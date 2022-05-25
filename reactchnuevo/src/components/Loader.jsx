import logo from '../images/logo_corea.png';
import '../components/styles/Loader.css';

export default function Loader() {

    return (
        <div className="loader">
            <img className="loader__img" src={logo} alt="" />
            <h2 className='loader__text'>Loading...</h2>
        </div>
    );
}