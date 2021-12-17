import { Route, Routes } from 'react-router-dom';

import './App.css';
import { UserProvider } from './contexts/AuthContexts';
import { AlertProvider } from './contexts/AlertContext';
import Alert from './components/Common/Alert';
import SecureRoute from './components/Common/SecureRoute';
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
import Edit from './components/Edit';


function App() {
	return (
		<UserProvider>
			<AlertProvider>
				<div className="App">
					<Navbar />
					<Alert />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
						<Route path="/register" element={<Register />} />
						<Route path="/shop" element={<Shop />} />
						<Route path="/details/:objectId" element={<ProductDetailsCard />} />
						<Route element={<SecureRoute />}>
							<Route path="/create" element={<Create />} />
							<Route path="/edit/:objectId" element={<Edit />} />
							<Route path='/my-products' element={<MyProducts />} />
							<Route path='/cart' element={<Cart />} />
						</Route>
					</Routes>
					<Footer />
				</div>
			</AlertProvider>
		</UserProvider>
	);
};

export default App;
