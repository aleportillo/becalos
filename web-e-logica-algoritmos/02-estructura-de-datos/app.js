import { agregarProducto, eliminarProducto, mostrarListaDeCompras } from "./lista.js";


agregarProducto('Leche', 12, 34.00);
agregarProducto('Arroz', 2, 12.00);
agregarProducto('Pollo', 2, 12.00);
agregarProducto('Pollo', 2, 12.00);
agregarProducto('Pasta', 4, 12.00);

mostrarListaDeCompras();

eliminarProducto('Pollo');

mostrarListaDeCompras();