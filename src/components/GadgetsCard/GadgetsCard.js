import { NavLink } from 'react-router-dom';

const GadgetsCard = () => {
    return (
        <section className="gadgets">
            <article className="gadgets-article">
                <h2 className="gadgets-title">Gadgets</h2>
                <article className="gadgets-img">
                    <img src="/images/gadgets.jpg" alt="#" />
                </article>
                <NavLink to="#" className='gadgets-btn'>More</NavLink>
            </article>
        </section>
    );
}

export default GadgetsCard;