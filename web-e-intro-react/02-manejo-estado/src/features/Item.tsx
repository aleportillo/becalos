import './Item.css';

interface ProductoItemProps {
	producto: { nombre: string; comprado: boolean };
	index: number;
	eliminarProducto: (index: number) => void;
	toggleProductoComprado: (index: number) => void;
}

const ProductoItem = ({ producto, index, eliminarProducto, toggleProductoComprado }: ProductoItemProps) => {
	return (
		<li key={index}>
			<span className={producto.comprado ? 'comprado' : ''}>
                <input type='checkbox' checked={producto.comprado} onChange={() => toggleProductoComprado(index)} />
                {producto.nombre}
            </span>
			<button onClick={() => eliminarProducto(index)}>Eliminar</button>
		</li>
	);
};

export default ProductoItem;
