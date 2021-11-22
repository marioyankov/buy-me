const Navbar = () => {
    return (
        <section className="nav">
            <nav>
                <img src="/images/logo.png" alt="Buy me logo" />
                <ul>
                    <li className="nav-btn">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-btn">
                        <a href="#">Shop</a>
                    </li>
                    <li className="nav-btn">
                        <a href="#">Login</a>
                    </li>
                    <li className="nav-btn">
                        <a href="#">Register</a>
                    </li>
                    <li className="nav-icon">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                    </li>
                    <li className="nav-icon">
                        <a href="#"><i class="fab fa-github"></i></a>
                    </li>
                    <li className="nav-icon">
                        <a href="#"><i class="fas fa-shopping-cart"></i></a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;