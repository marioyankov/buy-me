import AutoCard from "../AutoCard";
import TechCard from "../TechCard";
import GadgetsCard from '../GadgetsCard';
import ToysCard from '../ToysCard'

const Home = () => {
    return (
        <section>
            <TechCard />
            <GadgetsCard />
            <AutoCard />
            <ToysCard />
        </section>
    )
}

export default Home;