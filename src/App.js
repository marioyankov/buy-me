import { Route, Switch } from 'react-router-dom';


import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register/Register';
import Shop from './components/Shop';


function App() {
	

	return (
		<div className="App">
			<Navbar />

			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/shop" component={Shop} />
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
