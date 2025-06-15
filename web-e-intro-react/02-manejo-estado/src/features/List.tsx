import { useState } from "react";
import './List.css';
import ProductoItem from "./Item";

function ListaCompras() {
    
  const [productos, setProductos] = useState<{nombre: string, comprado: boolean}[]>([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, {nombre: nuevoProducto, comprado: false}]);
      setNuevoProducto("");
    }
  };

  const eliminarProducto = (index: number) => {
    productos.splice(index, 1);
    setProductos([...productos]);
  };
  
  const toggleProductoComprado = (index: number) => {
    productos[index].comprado = !productos[index].comprado; 
    setProductos([...productos]);
  }

  return (
    <>
        <div className="list-container">
        <h2>Lista de Compras</h2>
        <input
            type="text"
            value={nuevoProducto}
            onChange={(e) => setNuevoProducto(e.target.value)}
        />
        <button className="add-button" onClick={agregarProducto}> + </button>
        <hr/>
        <ul>
            {productos.map((producto, index) => (
                <ProductoItem 
                    key={index}
                    producto={producto}
                    index={index}
                    eliminarProducto={eliminarProducto}
                    toggleProductoComprado={toggleProductoComprado}
                />
            ))}
        </ul>
        </div>
    </>
  );
}

export default ListaCompras;