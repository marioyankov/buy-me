import tech from '../tech.jpg'

function TechArticle() {
    return (
        <section className="tech">
            <article className="tech-article">
                <article className="tech-img">
                    <img src={tech} alt="" />
                </article>
                <h2 className="tech-title">Electronics</h2>
                <a href="#" className='tech-btn'>More</a>
            </article>
        </section>
    );
}

export default TechArticle;