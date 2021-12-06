import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContexts';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register/Register';
import Shop from './components/Shop';
import Create from './components/Create';
import ProductDetailsCard from './components/Shop/ProductDetailsCard';


const initialAuthState = {
	userToken: '',
	email: '',
	objectId: ''
}

function App() {
	const [user, setUser] = useState({ email: '' });

	const login = (authData) => {
		setUser(authData);
		console.log(user)
	}

	const logout = () => {
		setUser(initialAuthState);
	}

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			<div className="App">
				<Navbar />

				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<Route path="/register" component={Register} />
					<Route path="/shop" component={Shop} />
					<Route path="/create" component={Create} />
					<Route path="/details/:productId" component={ProductDetailsCard} />
				</Switch>

				<Footer />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
