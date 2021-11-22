// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import AutoCard from './components/AutoCard';
import TechCard from './components/TechCard';
import GadgetsCard from './components/GadgetsCard';
import ToysCard from './components/ToysCard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <TechCard />
      <GadgetsCard />
      <AutoCard />
      <ToysCard />
      <Footer />
    </div>
  );
}

export default App;
