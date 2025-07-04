import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<div className='hero bg-base-200 min-height'>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<h1 className='text-5xl font-bold'> Gestor de Citas </h1>
						<p className='py-6'>
							Consulta y gestiona todas tus citas médicas de forma rápida y sencilla. Accede a la información de tus
							pacientes desde la sección <strong>"Ver Citas"</strong> y mantén tu agenda siempre actualizada.
						</p>
						<Link to={`/citas`} className='btn btn-primary'>
							Ver detalles
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
