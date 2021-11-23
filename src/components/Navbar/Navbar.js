import { NavLink } from 'react-router-dom';

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
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li className="nav-btn">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li className="nav-btn">
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    <li className="nav-icon">
                        <NavLink to="#"><i class="fab fa-facebook"></i></NavLink>
                    </li>
                    <li className="nav-icon">
                        <NavLink to="#"><i class="fab fa-github"></i></NavLink>
                    </li>
                    <li className="nav-icon">
                        <NavLink to="#"><i class="fas fa-shopping-cart"></i></NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;