import { calcularCosto, calcularDescuento } from "./costo.js";

const destinos = [];
let costoTotal = 0;

export const registrarDestino = (destino, fecha, transporte, numPersonas) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte, numPersonas),
        descuento: calcularDescuento(numPersonas)
    }

    costoTotal += nuevoViaje.costo;

    destinos.push(nuevoViaje);
}

export const mostrarItinerario = () => {
    console.log(`📌 Itinerario de Viajes (${destinos.length} registrados):`);
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log(`📍 ${viaje.destino} | Fecha: ${viaje.fecha} | Transporte: ${viaje.transporte} | Costo: ${viaje.costo}`);
    }
    console.log(`💰 Costo Total de Todos los Viajes: $${costoTotal}`);
}