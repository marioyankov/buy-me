import { NavLink } from 'react-router-dom';

import './TechCard.css';

const TechCard = () => {
    return (
        <section className="tech">
            <article className="tech-article">
                <h2 className="tech-title">Electronics</h2>
                <article className="tech-img">
                    <img src="/images/tech.jpg" alt="" />
                </article>
                <NavLink to="/shop" className='tech-btn'>More</NavLink>
            </article>
        </section>
    );
}

export default TechCard;