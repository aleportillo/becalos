function NotFound() {
	return (
		<>
			<div className='hero bg-base-200 min-height'>
				<div className='hero-content text-center'>
					<div className='max-w-l'>
						<h1 className='text-5xl font-bold m-6'> 404 </h1>
						<p className='text-base-400 text-base-content/50'>
							Lo sentimos, la página que estás buscando no se encuentra disponible.
						</p>
						<p className='text-base-400 text-base-content/50'>
							Es posible que la URL haya sido escrita incorrectamente o que la página haya sido movida o eliminada.
						</p>
						<p className='text-base-400 text-base-content/50'>
							Por favor, verifica la URL o vuelve a la página principal para encontrar lo que necesitas.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default NotFound;
