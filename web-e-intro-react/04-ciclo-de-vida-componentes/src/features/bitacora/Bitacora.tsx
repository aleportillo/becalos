import { useRef, useState } from 'react';
import './Bitacora.css';
import type { IPlaneta } from '../../models/planeta.model';

export default function Bitacora({
	setPlanetasVisitados,
	planetasVisitados,
}: {
	planetasVisitados: IPlaneta[];
	setPlanetasVisitados: React.Dispatch<React.SetStateAction<IPlaneta[]>>;
}) {
	const [nombre, setNombre] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [imagen, setImagen] = useState<File | null>(null);
	const inputImagenRef = useRef(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!nombre || !descripcion) {
			alert('Datos incompletos');
			return;
		}

		const nuevoPlaneta: IPlaneta = {
			nombre,
			descripcion,
			imagen: imagen ? URL.createObjectURL(imagen) : null,
		};

		setPlanetasVisitados((prev: IPlaneta[]) => {
			const planetas = [nuevoPlaneta, ...prev];
			localStorage.setItem('planetasVisitados', JSON.stringify(planetas));
			return planetas;
		});

		setNombre('');
		setDescripcion('');
		setImagen(null);
	};

	const eliminarPlaneta = (i: number) => {
		console.log(i);
		const planetas = [...planetasVisitados];
		planetas.splice(i, 1);
		setPlanetasVisitados(planetas);
		localStorage.setItem('planetasVisitados', JSON.stringify(planetas));
	};

	return (
		<>
			<div className='container bitacora-container'>
				<div>
					<h1> 🧑‍🚀 BITACORA </h1>
				</div>
				<div>
					<form className='formulario-bitacora' onSubmit={handleSubmit}>
						<input type='text' placeholder='Planeta' value={nombre} onChange={(e) => setNombre(e.target.value)} />
						<textarea
							placeholder='Escribe tu bitácora...'
							value={descripcion}
							onChange={(e) => setDescripcion(e.target.value)}
						></textarea>
						<input type='file' onChange={(e) => setImagen(e.target.files![0])} ref={inputImagenRef} />
						<button type='submit'>💾 Guardar</button>
					</form>
				</div>
				<div>
					<ul>
						{planetasVisitados.map((p, index) => (
							<li key={index}>
								{p.imagen ? <img src={p.imagen} alt={`Imagen de ${p.nombre}`} /> : <div className='image'></div>}

								<h3>{p.nombre}</h3>
								<p style={{ gridRow: 2, gridColumn: 2 }}> {p.descripcion} </p>
								<button className='borrar' onClick={() => eliminarPlaneta(index)}>
									x
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
