import { NavLink } from 'react-router-dom';

const ToysCard = () => {
    return (
        <section className="toys">
            <article className="toys-article">
                <h2 className="toys-title">Toys</h2>
                <article className="toys-img">
                    <img src="/images/toys.jpg" alt="#" />
                </article>
                <NavLink to="#" className='toys-btn'>More</NavLink>
            </article>
        </section>
    );
}

export default ToysCard;