let mesasDisponibles = 5;
const formHTML = document.getElementById('reservaForm');
const mensajeHTML = document.getElementById('mensaje');
const nameHTML = document.getElementById('nombre');
const tablesHTML =document.getElementById('mesas');

function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(mesasSolicitadas);
            if (mesasSolicitadas <= mesasDisponibles) {
                mesasDisponibles -= mesasSolicitadas;
                resolve(true);
            } else {
                reject('No hay sufientes mesas disponibles');
            }
        }, 2000);
    });
}

function enviarConfirmacionReserva(nombreCliente, mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                const exito = Math.random() < 0.8;
                if (exito) {
                    resolve(`Correo enviado exitosamente a ${nombreCliente}.`);
                } else {
                    mesasDisponibles += mesasSolicitadas;
                    reject('Error al enviar el correo de confirmación.');
                }

        }, 1500);
    });
}

async function hacerReserva(event) {
    const nombreCliente = nameHTML.value;
    let mesasSolicitadas = tablesHTML.value;
    event.preventDefault();
    try {
        console.log(mesasSolicitadas);
        mesasSolicitadas = Number(mesasSolicitadas);
        await verificarDisponibilidad(mesasSolicitadas);
        const message = await enviarConfirmacionReserva(nombreCliente);
        mensajeHTML.innerText = message;
        mensajeHTML.classList.add('success');

        setTimeout(() => {
            mensajeHTML.innerText = '';
            mensajeHTML.classList.remove('success');
        }, 3000);

    } catch (error) {
        mensajeHTML.innerText = error;
        mensajeHTML.classList.add('error');

        setTimeout(() => {
            mensajeHTML.innerText = '';
            mensajeHTML.classList.remove('error');
        }, 3000);
    }
}

formHTML.addEventListener("submit", hacerReserva);