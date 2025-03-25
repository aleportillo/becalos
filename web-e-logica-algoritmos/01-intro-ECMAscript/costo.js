export const costosDestinos = {
    'Paris' : 500,
    'Londres' : 400,
    'New York' : 600
}

export const costosTransporte = {
    'Avión' : 200,
    'Tren' : 100,
}

export const calcularCosto = (destino, transporte, numPersonas) => {
    let costoBase = 0;

    costoBase = costosDestinos[destino] || 0; 

    costoBase += (costosTransporte[transporte] || 0);

    costoBase = costoBase - costoBase * calcularDescuento(numPersonas);

    return costoBase;
}

export const calcularDescuento = (numPersonas) => {
    if (numPersonas >= 5) {
        return 0.2;
    } 
    if (numPersonas >= 3) {
        return 0.1;
    }

    return 0;
}