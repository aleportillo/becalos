import { useReducer, useRef, useCallback, useState, useEffect } from 'react';
import { productReducer } from './helpers/ProductReducer';
import { generateId } from './helpers/utils';
import './InventoryManager.css';

export function InventoryManager() {
	const initializer = () => {
		const data = localStorage.getItem('productos');
		return data ? { products: JSON.parse(data) } : { products: [] };
	};

	const [state, dispatch] = useReducer(productReducer, undefined, initializer);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [searchQuery, setSearchQuery] = useState('');

	const addProduct = () => {
		if (!inputRef?.current) return;
		const name = inputRef.current.value;
		dispatch({ type: 'ADD_PRODUCT', payload: { name, id: generateId(), stock: 0 } });
		inputRef.current.value = '';
	};

	const handleIncrement = useCallback((product: { name: string; id: number; stock: number }) => {
		dispatch({ type: 'UPDATE_PRODUCT', payload: { ...product, stock: product.stock + 1 } });
	}, []);

	const handleDecrement = useCallback((product: { name: string; id: number; stock: number }) => {
		dispatch({ type: 'UPDATE_PRODUCT', payload: { ...product, stock: product.stock - 1 } });
	}, []);

	const handleRemove = useCallback((product: { name: string; id: number; stock: number }) => {
		dispatch({ type: 'REMOVE_PRODUCT', payload: product });
	}, []);

	useEffect(() => {
		localStorage.setItem('productos', JSON.stringify(state.products));
	}, [state.products]);

	return (
		<>
			<div
				className='min-h-screen w-[80%] mx-auto'
				style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
			>
				<h1 className='text-4xl font-bold text-center'>Manejo de Inventario</h1>

				<div
					className='p-6 rounded-lg shadow-lg bg-base-300 w-full max-w-3xl mx-auto'
					style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
				>
					<h2 className='text-l font-semibold  w-full'>Agregar Producto</h2>
					<input type='text' placeholder='Type here' className='input' ref={inputRef} style={{ flex: '1' }} />
					<button onClick={addProduct} className='btn btn-primary'>
						Agregar
					</button>
				</div>

				<div className=' w-full max-w-3xl mx-auto mt-6' style={{ display: 'flex', gap: '1rem' }}>
					<input
						type='text'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder='Buscar producto'
						className='input input-bordered w-full'
						style={{ flex: '1' }}
					/>
					<button
						className='btn btn-square btn-secondary'
						style={{ width: '10rem' }}
						onClick={() => dispatch({ type: 'CLEAR', payload: { id: 0, stock: 0, name: '' } })}
					>
						Vaciar inventario
					</button>
				</div>

				<div className='w-full max-w-3xl mx-auto overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
					<table className='table'>
						<thead>
							<tr>
								<th className='w-1/2'>Producto</th>
								<th className='w-1/3 text-center'>Stock</th>
								<th className='w-[5rem] text-center'></th>
							</tr>
						</thead>
						<tbody>
							{state?.products?.length <= 0 ? (
								<tr>
									<td colSpan={3} className='text-center'>
										No hay productos
									</td>
								</tr>
							) : (
								state.products
									.filter((p: { name: string }) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
									.map((product: { id: number; name: string; stock: number }) => (
										<tr key={product.id}>
											<td> {product.name} </td>
											<td className='stock-actions flex items-center gap-[1.5rem] justify-center'>
												<button className='btn btn-square btn-outline' onClick={() => handleDecrement(product)}>
													<i className='fas fa-minus text-sm'></i>
												</button>
												<p className='text-3xl'>{product.stock}</p>
												<button className='btn btn-square btn-outline' onClick={() => handleIncrement(product)}>
													<i className='fas fa-plus text-sm'></i>
												</button>
											</td>
											<td className='text-center'>
												<button className='btn btn-soft btn-error' onClick={() => handleRemove(product)}>
													<i className='fas fa-trash'></i>
												</button>
											</td>
										</tr>
									))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
