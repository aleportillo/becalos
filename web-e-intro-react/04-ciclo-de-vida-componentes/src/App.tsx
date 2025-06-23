import Panel from './features/panel/Panel';
import Bitacora from './features/bitacora/Bitacora';
import { useState } from 'react';
import type { IPlaneta } from './models/planeta.model';

function App() {
	const [planetasVisitados, setPlanetasVisitados] = useState<IPlaneta[]>(
		JSON.parse(localStorage.getItem('planetasVisitados') || '[]'),
	);

	return (
		<>
			<Panel planetasVisitados={planetasVisitados} />
			<Bitacora setPlanetasVisitados={setPlanetasVisitados} planetasVisitados={planetasVisitados} />
		</>
	);
}

export default App;
