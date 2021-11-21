import toys from '../toys.png'

function ToysArticle() {
    return (
        <section className="toys">
            <article className="toys-article">
                <article className="toys-img">
                    <img src={toys} alt="#" />
                </article>
                <h2 className="toys-title">Toys</h2>
                <a href="#" className='toys-btn'>More</a>
            </article>
        </section>
    );
}

export default ToysArticle;