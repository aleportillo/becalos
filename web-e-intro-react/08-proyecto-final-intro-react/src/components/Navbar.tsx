import { Link, useNavigate } from 'react-router';

interface NavbarProps {
	username: string;
	onLogout: () => void;
}

function Navbar({ username, onLogout }: NavbarProps) {
	const navigate = useNavigate();

	const handleLogout = () => {
        onLogout();
		navigate('/login');
	};

	return (
		<>
			<nav className='bg-gray-800 text-white p-4 shadow-md'>
				<div className='container mx-auto flex justify-between items-center'>
					<div className='flex items-center space-x-4'>
						<Link to='/' className='text-2xl font-semibold hover:text-cyan-300'>
							SocialMedia
						</Link>
						<div className='text-gray-300'>{username}</div>
					</div>
					<div className='flex space-x-6'>
						<Link to='/home' className='text-lg hover:text-cyan-300 transition duration-200'>
							Inicio
						</Link>
						<Link to='/profile' className='text-lg hover:text-cyan-300 transition duration-200'>
							Perfil
						</Link>
						<button onClick={handleLogout} className='text-lg hover:text-cyan-300 transition duration-200'>
							Cerrar sesión
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
