// import logo from './logo.svg';
import './App.css';
import AutoArticle from './components/AutoArticle';
import Footer from './components/Footer';
import GadgetsArticle from './components/GadgetsArticle';
import Navbar from './components/navbar';
import TechArticle from './components/TechArticle';
import ToysArticle from './components/ToysArticle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TechArticle />
      <GadgetsArticle />
      <AutoArticle />
      <ToysArticle />
      <Footer />
    </div>
  );
}

export default App;
