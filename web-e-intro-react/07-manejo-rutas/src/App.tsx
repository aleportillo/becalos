import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import CitaDetalle from './pages/CitaDetalle';
import Citas from './pages/Citas';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<header>
				<nav className='navbar bg-primary text-primary-content'>
					<div className='flex-1'>
						<Link className='btn btn-ghost text-l' to='/'>
							Medico
						</Link>
					</div>
					<Link className='btn btn-ghost text-l' to='/citas'>
						Citas
					</Link>
				</nav>
			</header>

			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/citas' element={<Citas />} />
					<Route path='/cita/:id' element={<CitaDetalle />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
