import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="nav">
            <nav>
                <NavLink className="home" to="/" ><img src="/images/logo.png" alt="Buy me logo" /></NavLink>
                <label htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
                <ul>
                    <li className="nav-btn">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav-btn">
                        <NavLink activeClassName="active-link" to="/shop">Shop</NavLink>
                    </li>
                    <li className="nav-btn">
                        <NavLink activeClassName="active-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-btn">
                        <NavLink activeClassName="active-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-icon">
                        <NavLink to={{pathname: "https://www.facebook.com"}} target="_blank"><i className="fab fa-facebook"></i></NavLink>
                    </li>
                    <li className="nav-icon">
                        <NavLink to={{pathname: "https://github.com/marioyankov"}} target="_blank"><i className="fab fa-github"></i></NavLink>
                    </li>
                    <li className="nav-icon">
                        <NavLink activeClassName="active-link" to="/cart"><i className="fas fa-shopping-cart"></i></NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;