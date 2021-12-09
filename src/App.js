import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import MyProducts from './components/MyProducts';
import Cart from './components/Cart';


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

				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/register" element={<Register />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/create" element={<Create />} />
					<Route path="/details/:productId" element={<ProductDetailsCard />} />
					<Route path='/my-products' element={<MyProducts />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>

				<Footer />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
