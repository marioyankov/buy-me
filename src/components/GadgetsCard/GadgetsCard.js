import { NavLink } from 'react-router-dom';

import './GadgetsCard.css';

const GadgetsCard = () => {
    return (
        <section className="gadgets">
            <article className="gadgets-article">
                <h2 className="gadgets-title">Gadgets</h2>
                <article className="gadgets-img">
                    <img src="/images/gadgets.jpg" alt="#" />
                </article>
                <NavLink to="/shop" className='gadgets-btn'>More</NavLink>
            </article>
        </section>
    );
};

export default GadgetsCard;