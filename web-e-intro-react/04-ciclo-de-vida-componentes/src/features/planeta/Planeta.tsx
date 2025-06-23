import { useEffect } from 'react';

export function Planeta({ nombre }: { nombre: string }) {
	useEffect(() => {
		console.log(`¡El planeta ${nombre} ha aparecido!`); // Montaje

		return () => {
			console.log(`¡El planeta ${nombre} ha desaparecido!`); // Desmontaje
		};
	}, [nombre]);

	return <li>{nombre}</li>;
}
