let lista = [];

export const agregarProducto = (nombre, cantidad, precio) => {

    if(lista.find(p => p.nombre.toLowerCase() === nombre.toLowerCase())){
        console.log(`🚫 El producto "${nombre}" ya se encuentra en la lista de compras.`);
        return;
    }

    lista.push({
        nombre,
        cantidad,
        precio
    })
}

export const eliminarProducto = (nombre) => {
    lista = lista.filter(p => p.nombre.toLowerCase() !== nombre.toLowerCase());
    console.log(`🗑️ El producto "${nombre}" ha sido eliminado de la lista.`);
}

export const mostrarListaDeCompras = () => {
    console.log(`🛒 Lista de Compras (${lista.length} productos registrados):`);
    for (let i = 0; i < lista.length; i++) {
        const producto = lista[i];
        console.log(`📦 ${producto.nombre} | Cantidad: ${producto.cantidad} | Precio: $${producto.precio}`);
    }

    const costoTotal = lista.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

    console.log(`💸 Costo Total de la Lista: $${costoTotal.toFixed(2)}`);

};