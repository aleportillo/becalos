import { useState, useEffect, useMemo } from 'react';
import './App.css';

interface ITarea {
	nombre: string;
	duracion: number;
}

function App() {
	const [tareas, setTareas] = useState<ITarea[]>([]);
	const [nuevaTarea, setNuevaTarea] = useState('');
	const [duracion, setDuracion] = useState('');
	const [filtro, setFiltro] = useState('');

	useEffect(() => {
		document.title = `Total: ${calcularTiempoTotal} minutos`;
	}, [tareas]);

	useEffect(() => {
		const tareasGuardadas = localStorage.getItem('tareas');
		if (tareasGuardadas) {
			setTareas(JSON.parse(tareasGuardadas));
		}
    setFiltro('todas');
	}, []);

	const tareasFiltradas = useMemo(() => {
		switch (filtro) {
			case 'menos10':
				return tareas.filter((t) => t.duracion < 10);
			case 'entre10y30':
				return tareas.filter((t) => t.duracion >= 10 && t.duracion <= 30);
			case 'mas30':
				return tareas.filter((t) => t.duracion > 30);
			default:
				return tareas;
		}
	}, [filtro, tareas]);

	const calcularTiempoTotal = useMemo(() => {
		console.log('Calculando tiempo total...');
		return tareasFiltradas.reduce((total: number, tarea: ITarea) => total + tarea.duracion, 0);
	}, [tareasFiltradas]);

	const agregarTarea = () => {
		if (nuevaTarea && duracion) {
			const nuevaTareaObj = {
				nombre: nuevaTarea,
				duracion: parseInt(duracion),
			};
			setTareas([...tareas, nuevaTareaObj]);
			localStorage.setItem('tareas', JSON.stringify([...tareas, nuevaTareaObj]));
			setNuevaTarea('');
			setDuracion('');
			setFiltro('todas');
		}
	};
  
  const borrarTodo = () => {
    setTareas([]);
    localStorage.removeItem('tareas');
  }

	return (
		<div className='wrapper'>
			<h1>Contador de Tareas</h1>
			<div>
				<input
					type='text'
					value={nuevaTarea}
					onChange={(e) => setNuevaTarea(e.target.value)}
					placeholder='Nombre de la tarea'
				/>
				<input
					type='number'
					value={duracion}
					onChange={(e) => setDuracion(e.target.value)}
					placeholder='Duración en minutos'
				/>
				<button onClick={agregarTarea}>Agregar tarea</button>
			</div>
			<div className='filter'>
				<label htmlFor='filtroDuracion' style={{ marginRight: '0.5rem', color: '#bb86fc' }}>
					Filtrar por duración:
				</label>
				<select
					id='filtroDuracion'
					value={filtro}
					onChange={(e) => setFiltro(e.target.value)}
					style={{
						padding: '0.6rem 1rem',
						borderRadius: '8px',
						border: 'none',
						background: '#2e2e44',
						color: '#e0e0e0',
						fontSize: '1rem',
						outline: 'none',
						cursor: 'pointer',
						boxShadow: '0 0 8px #61dafb44',
					}}
				>
					<option value='todas'>Todas</option>
					<option value='menos10'>Menos de 10 minutos</option>
					<option value='entre10y30'>10 a 30 minutos</option>
					<option value='mas30'>Más de 30 minutos</option>
				</select>
        <button onClick={borrarTodo}>
          Borrar todo
        </button>
			</div>
			<h2>Tareas</h2>
			<ul>
				{tareasFiltradas.map((tarea, index) => (
					<li key={index}>
						{tarea.nombre}: {tarea.duracion} minutos
					</li>
				))}
			</ul>

			<h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
		</div>
	);
}

export default App;
