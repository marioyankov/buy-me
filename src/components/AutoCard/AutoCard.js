import { NavLink } from 'react-router-dom';

import './AutoCard.css';

const AutoCard = () => {
    return (
        <section className="auto">
            <article className="auto-article">
                <h2 className="auto-title">Automobiles</h2>
                <article className="auto-img">
                    <img src="/images/auto.jpg" alt="#" />
                </article>
                <NavLink to="/shop" className='auto-btn'>More</NavLink>
            </article>
        </section>
    );
};

export default AutoCard;