const form = document.getElementById('registroEvento');

const obtenerValores = () => {
	return {
		nombre: document.getElementById('nombre').value?.trim(),
		correo: document.getElementById('correo').value?.trim(),
		telefono: document.getElementById('telefono').value?.trim(),
		fecha: document.getElementById('fecha').value,
		hora: document.getElementById('hora').value,
		intereses: Array.from(document.querySelectorAll('input[name="intereses"]:checked'))?.map((i) => i.value),
		horario: document.querySelector('input[name="horario"]:checked')?.value,
		archivo: document.getElementById('archivo')?.files?.[0],
	};
};

const esValido = (data) => {
	const regexTelefono = /^\+?[\d\s\-()]{7,15}$/;
	const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const MAX_TAMANO_MB = 5;
	const MAX_TAMANO_BYTES = MAX_TAMANO_MB * 1024 * 1024;

	if (
		Object.values(data).some((f) => f === null || f === undefined || (typeof f === 'string' && !f.trim()) || (Array.isArray(f) && f.length === 0))
	) {
		alert('Por favor, completa todos los campos obligatorios (incluyendo el archivo).');
		return false;
	}

	if (!regexCorreo.test(data.correo)) {
		alert('Por favor, ingresa un correo electrónico válido.');
		return false;
	}

	if (!regexTelefono.test(data.telefono)) {
		alert('Por favor, ingresa un número de teléfono válido.');
		return false;
	}

	if (data.archivo && data.archivo.size > MAX_TAMANO_BYTES) {
		alert(`El archivo no debe superar los ${MAX_TAMANO_MB} MB.`);
		return false;
	}

	return true;
};

form.addEventListener('submit', function (event) {
	event.preventDefault();

	const data = obtenerValores();

	console.log(data);

	if (!esValido(data)) return;

	form.reset();
	alert('Registro exitoso. ¡Gracias por registrarte!');
});
