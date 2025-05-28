const { z } = window.Zod;

const form = document.getElementById('registerForm');
const errors = document.getElementById('errors');

const registerSchema = z.object({
	name: z
		.string()
		.min(1, 'El nombre es obligatorio')
		.regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras y espacios'),
	email: z
        .string()
        .email('Correo inválido'),
	password: z
		.string()
		.min(6, 'La contraseña debe tener al menos 6 caracteres')
		.regex(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
		.regex(/\d/, 'Debe contener al menos un número')
		.regex(/[@$!%*?&#]/, 'Debe contener al menos un carácter especial'),
});

const obtenerValores = () => {
	return {
		name: document.getElementById('name').value?.trim(),
		email: document.getElementById('email').value?.trim(),
		password: document.getElementById('password').value?.trim(),
	};
};

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formData = obtenerValores();

	const result = registerSchema.safeParse(formData);

	if (result.success) {
		alert('¡Registro exitoso!');
		form.reset();
		errors.textContent = '';
	} else {
		errors.textContent = result.error.issues[0].message;
	}
});
