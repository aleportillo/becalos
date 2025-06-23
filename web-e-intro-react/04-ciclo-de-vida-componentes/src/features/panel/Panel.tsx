import { useEffect, useRef, useState } from 'react';
import { Planeta } from '../planeta/Planeta';
import type { IPlaneta } from '../../models/planeta.model';
import './Panel.css';

function Panel({ planetasVisitados }: { planetasVisitados: IPlaneta[] }) {
	const [distancia, setDistancia] = useState(0);
	const [combustible, setCombustible] = useState(100);
	const [estadoNave, setEstadoNave] = useState(true);
	const [mensaje, setMensaje] = useState<string[]>([]);
	const scrollRefMensajes = useRef<HTMLLIElement>(null);
	useEffect(() => {
		setMensaje((prev) => [
			...prev,
			estadoNave ? '¡El panel de control está listo!' : 'El panel de control se ha apagado.',
		]);

		const interval = setInterval(() => {
			if (!estadoNave) return;
			if (combustible === 0) clearInterval(interval);
			setCombustible((prev) => (prev > 0 ? prev - 2 : 0));
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [estadoNave]);

	useEffect(() => {
		if (scrollRefMensajes.current) scrollRefMensajes.current.scrollIntoView({ behavior: 'smooth' });
	}, [mensaje]);

	useEffect(() => {
		setDistancia((prev) => (combustible > 0 ? prev + 25 : prev));
		setMensaje((prev) => [
			...prev,
			combustible > 0 ? `¡Combustible actualizado ${combustible}%!` : `¡Oh no, ya no hay combustible!`,
		]);
	}, [combustible]);

	useEffect(() => {
		if (!planetasVisitados.length) return;
		const nuevoPlaneta = [...planetasVisitados].shift();
		setMensaje((prev) => [...prev, `Planeta visitado: ${nuevoPlaneta?.nombre}`]);
	}, [planetasVisitados]);

	const aterrizar = () => {
		setEstadoNave(!estadoNave);
	};

	return (
		<>
			<div className='container panel-container'>
				<div>
					<h1> 🛰️ PANEL </h1>
				</div>
				<div>
					<p>
						🌌 Estado: <span className='txt-secondary'> {estadoNave ? 'En órbita' : 'Aterrizando'} </span>
					</p>
					<p>
						📏 Distancia: <span className='txt-secondary'> {distancia}km </span>
					</p>
					<p>
						⛽ Combustible:
						<span className='txt-secondary' style={combustible <= 30 ? { color: '#ff3b3b' } : {}}>
							{combustible}%
						</span>
					</p>
				</div>
				<div>
					🌍 Planetas visitados:
					<ul>
						{planetasVisitados.map((p, index) => (
							<Planeta key={p.nombre + index} nombre={p.nombre} />
						))}
					</ul>
				</div>
				<div className='action'>
					<button onClick={aterrizar}> {estadoNave ? 'Aterrizar en nuevo planeta' : 'Iniciar viaje'} </button>
				</div>
				<div>
					<span className='txt-secondary'> 💬 Mensaje del sistema: </span>
					<ul>
						{mensaje.map((m, index) => (
							<li key={m + index}>{m}</li>
						))}
						<li ref={scrollRefMensajes}></li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Panel;
