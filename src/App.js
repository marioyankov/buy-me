// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import CategoryCard from './components/CategoryCard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryCard />
      <Footer />
    </div>
  );
}

export default App;
