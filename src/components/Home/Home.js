import AutoCard from "../AutoCard";
import TechCard from "../TechCard";
import GadgetsCard from '../GadgetsCard';
import ToysCard from '../ToysCard'

const Home = () => {
    return (
        <main>
            <TechCard />
            <GadgetsCard />
            <AutoCard />
            <ToysCard />
        </main>
    )
}

export default Home;