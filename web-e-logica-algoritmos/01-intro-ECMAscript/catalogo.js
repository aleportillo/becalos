import { costosDestinos, costosTransporte } from "./costo.js"

export const agregarDestino = (destino, precio) => {
    costosDestinos[destino] = precio;
}

export const agregarTransporte = (transporte, precio) => {
    costosTransporte[transporte] = precio;
}