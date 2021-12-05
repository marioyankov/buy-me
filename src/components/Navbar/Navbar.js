import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContexts';

import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // const { user } = useContext(AuthContext);

    // let currentUser = {...user}

    let guestNavigation = (
        <>
            <li className="nav-btn">
                <NavLink activeClassName="active-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-btn">
                <NavLink activeClassName="active-link" to="/register">Register</NavLink>
            </li>
        </>
    );

    let userNavigation = (
        <>
            <li className="nav-btn">
                <NavLink activeClassName="active-link" to="/create">Create</NavLink>
            </li>
            <li className="nav-btn">
                <NavLink activeClassName="active-link" to="/logout">Logout</NavLink>
            </li>
            <li className="nav-icon">
                <NavLink activeClassName="active-link" to="/cart"><i className="fas fa-shopping-cart"></i></NavLink>
            </li>
        </>
    );

    return (
        <section className="nav">
            <nav>
                <NavLink className="home" to="/" ><img src="/images/logo.png" alt="Buy me logo" /></NavLink>
                <label htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
                <ul>
                    <li className='nav-user-info'>
                        {/* <p>Welcome, {currentUser.email ? currentUser.email : 'Guest'}</p> */}
                    </li>
                    <li className="nav-btn">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav-btn">
                        <NavLink activeClassName="active-link" to="/shop">Shop</NavLink>
                    </li>

                    {/* {currentUser.email
                        ? userNavigation
                        : guestNavigation
                    } */}

                    <li className="nav-icon">
                        <NavLink to={{ pathname: "https://www.facebook.com" }} target="_blank"><i className="fab fa-facebook"></i></NavLink>
                    </li>
                    <li className="nav-icon">
                        <NavLink to={{ pathname: "https://github.com/marioyankov" }} target="_blank"><i className="fab fa-github"></i></NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;