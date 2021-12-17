import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContexts';

import './Navbar.css';

const Navbar = () => {
    const { user } = useAuthContext();

    let guestNavigation = (
        <>
            <li className="nav-btn">
                <NavLink className="active-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-btn">
                <NavLink className="active-link" to="/register">Register</NavLink>
            </li>
        </>
    );

    let userNavigation = (
        <>
            <li className="nav-btn">
                <NavLink className="active-link" to="/create">Create</NavLink>
            </li>
            <li className="nav-btn">
                <NavLink className="active-link" to="/my-products">My Products</NavLink>
            </li>
            <li className="nav-btn">
                <NavLink className="active-link" to="/logout">Logout</NavLink>
            </li>
            <li className="nav-icon">
                <NavLink className="active-link" to="/cart"><i className="fas fa-shopping-cart"></i></NavLink>
            </li>
        </>
    );

    return (
        <article className="nav">
            <nav>
                <NavLink className="home" to="/" ><img src="/images/logo.png" alt="Buy me logo" /></NavLink>
                <label htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
                <ul>
                    <span className='nav-user-text'>Welcome, {user.email ? `${user.email} !` : 'Guest !'}</span>
                    <li className="nav-btn">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav-btn">
                        <NavLink className="active-link" to="/shop">Shop</NavLink>
                    </li>

                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }

                    <li className="nav-icon">
                        <NavLink to={{ pathname: "https://www.facebook.com" }} target="_blank"><i className="fab fa-facebook"></i></NavLink>
                    </li>
                    <li className="nav-icon">
                        <NavLink to={{ pathname: "https://github.com/marioyankov" }} target="_blank"><i className="fab fa-github"></i></NavLink>
                    </li>
                </ul>
            </nav>
        </article>
    );
}

export default Navbar;