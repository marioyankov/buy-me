import { useState, useEffect } from 'react';
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


function App() {
	const Backendless = require('backendless');
	const [user, setUser] = useState({email: ''});

	useEffect(() => {
		// let userObject = await Backendless.UserService.getCurrentUser()
		Backendless.UserService.getCurrentUser()
			.then(authData => {
				setUser(authData)
				console.log(authData)
			})
			.catch(err => {
				setUser({email: ''})
				console.log(err)
			})
	}, [Backendless]);

	return (
		<AuthContext.Provider value={user}>
			<div className="App">
				<Navbar />

				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<Route path="/register" component={Register} />
					<Route path="/shop" component={Shop} />
					<Route path="/create" component={Create} />
				</Switch>

				<Footer />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
