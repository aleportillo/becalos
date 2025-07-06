import { useState, type FormEvent } from 'react';
import { verifyAccount } from '../utils/auth';
import { useNavigate } from 'react-router';

interface LoginProps {
  onLogin: (username: string) => void;
}

function Login({onLogin}: LoginProps) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
    const navigate = useNavigate();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const account = verifyAccount(username, password);

		if (account) {
            navigate('/home');
			onLogin(username);
		} else {
			setError('El usuario y/o contraseña son incorrectas');
			setTimeout(() => setError(''), 2000);
		}
	};

	return (
		<>
			<div className='hero bg-base-200 min-h-screen'>
				<div className='hero-content flex-col lg:flex-row-reverse w-4/5 max-w-[80rem] gap-12'>
					<div className='w-full'>
						<h1 className='text-5xl font-bold text-center md:text-left'>Happening now!</h1>
						<p className='text-3xl py-6 text-center md:text-left'>Join today.</p>
					</div>
					<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
						<div className='card-body'>
							<form onSubmit={handleSubmit}>
								<fieldset className='fieldset'>
									<label className='label'>Username</label>
									<input
										type='text'
										className='input'
										placeholder='Email'
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
									<label className='label'>Password</label>
									<input
										type='password'
										className='input'
										placeholder='Password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<button type='submit' className='btn btn-primary mt-4'>
										Login
									</button>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
				{error && (
					<div role='alert' className='alert alert-error alert-soft' style={{ position: 'absolute', bottom: '1rem' }}>
						<span> {error} </span>
					</div>
				)}
			</div>
		</>
	);
}

export default Login;
