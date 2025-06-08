import type { Persona } from '../models/persona.model.js';
import Tarjeta from './Tarjeta.js';

function Lista({personas}: { personas: Persona[] }) {
	return (
		<section style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }} >
            {personas.map((persona: Persona, index: number) => ( <Tarjeta key={index} {...persona} /> ))}
		</section>
	);
}

export default Lista;