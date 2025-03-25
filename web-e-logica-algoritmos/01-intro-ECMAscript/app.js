import { agregarDestino } from "./catalogo.js";
import { mostrarItinerario, registrarDestino } from "./viajes.js";

const iniciarApp = () => {
    agregarDestino('Madrid', 300);
    registrarDestino("Paris", "2024-06-15", "Avión", 8);
    registrarDestino("Londres", "2024-07-01", "Tren", 2);
    mostrarItinerario();
}

iniciarApp();