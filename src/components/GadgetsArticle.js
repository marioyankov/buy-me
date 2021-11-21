import gadgets from '../gadgets.jpg'

function GadgetsArticle() {
    return (
        <section className="gadgets">
            <article className="gadgets-article">
                <article className="gadgets-img">
                    <img src={gadgets} alt="#" />
                </article>
                <h2 className="gadgets-title">Gadgets</h2>
                <a href="#" className='gadgets-btn'>More</a>
            </article>
        </section>
    );
}

export default GadgetsArticle;