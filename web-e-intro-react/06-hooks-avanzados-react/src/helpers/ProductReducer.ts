export const productReducer = (
	state: { products: { name: string; id: number; stock: number }[] },
	action: {
		type: string;
		payload: { name: string; id: number; stock: number; products?: { name: string; id: number; stock: number }[] };
	},
) => {
	const actions: Record<string, () => typeof state> = {
		ADD_PRODUCT: () => ({
			...state,
			products: [...state.products, action.payload],
		}),
		REMOVE_PRODUCT: () => ({
			...state,
			products: state.products.filter((product) => product.id !== action.payload.id),
		}),
		UPDATE_PRODUCT: () => ({
			...state,
			products: state.products.map((product) =>
				product.id === action.payload.id ? { ...product, ...action.payload } : product,
			),
		}),
		CLEAR: () => ({
			...state,
			products: []
		}),
	};

	return actions[action.type] ? actions[action.type]() : state;
};
