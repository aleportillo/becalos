import { useEffect, useState } from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

function App() {
	const [user, setUser] = useState<string | null>('');

	useEffect(() => {
		const savedUser = localStorage.getItem('username');
		if (savedUser) setUser(savedUser);
	}, []);

	const handleLogin = (username: string) => {
		setUser(username);
		localStorage.setItem('username', username);
	};

	const handleLogout = () => {
		setUser(null);
		localStorage.removeItem('username');
	};

	return (
		<>
			<Router basename='/becalos/web-e-intro-react/08-proyecto-final-intro-react/dist'>
			{/* <Router> */}
					{user && location.pathname !== '/login' && <Navbar username={user} onLogout={handleLogout} />}
				<Routes>
					<Route path='/home' element={user ? <Home username={user} /> : <Navigate to='/' />} />
					<Route path='/profile' element={user ? <Profile username={user} /> : <Navigate to='/' />} />

					<Route path='/' element={user ? <Navigate to='/home' /> : <Login onLogin={handleLogin} />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
