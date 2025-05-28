let numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
let timeoutId;

botonAdivinar.addEventListener('click', () => {
    adivinarNumero();
});

inputNumero.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adivinarNumero();
    }
});

const adivinarNumero = () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (timeoutId) {
        clearTimeout(timeoutId);
        mensaje.classList.remove('correcto', 'incorrecto');
    }

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        mensaje.classList.add('incorrecto');
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número! Ahora, intenta adivinar otro número.';
        mensaje.classList.add('correcto');
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        inputNumero.value = '';
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = `El número es más alto que ${numeroJugador}.`;
        mensaje.classList.add('incorrecto');
    } else {
        mensaje.textContent = `El número es más bajo que ${numeroJugador}.`;
        mensaje.classList.add('incorrecto');
    }
    inputNumero.focus();

    timeoutId = setTimeout(() => {
        mensaje.textContent = '';
    }, 8000);
};
