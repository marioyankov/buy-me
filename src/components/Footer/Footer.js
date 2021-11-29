import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <span>Created by <NavLink to="#">jus7SoHm</NavLink> | <span className="far fa-sopyright"></span> 2021 All rights reserved
            </span>
        </footer>
    );
}

export default Footer;