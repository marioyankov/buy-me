import { Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
	return (
		<div className="App">
			<Navbar />

			<Switch>
				<Route path="/" exact component={Home}></Route>
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
