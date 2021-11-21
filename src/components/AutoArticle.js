import auto from '../auto.jpg'

function AutoArticle() {
    return (
        <section className="auto">
            <article className="auto-article">
                <article className="auto-img">
                    <img src={auto} alt="#" />
                </article>
                <h2 className="auto-title">Automobiles</h2>
                <a href="#" className='auto-btn'>More</a>
            </article>
        </section>
    );
}

export default AutoArticle;