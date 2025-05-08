const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1;

const statusOptions = {
	process: 'En proceso',
	complete: 'Completado',
	pending: 'Pendiente',
};

addOrderBtn.addEventListener('click', () => {
	const order = { id: orderId++, status: 'pending' };
	addOrder(order);
	processOrder(order);
});

const addOrder = (order) => {
	const listItem = document.createElement('li');
	const statusSpan = document.createElement('span');
	const orderText = document.createElement('span');

	listItem.id = `order-${order.id}`;
	orderText.textContent = `Pedido #${order.id}: `;
	statusSpan.textContent = statusOptions[order.status];

	statusSpan.classList.add('order-status', order.status);
	listItem.appendChild(orderText);
	listItem.appendChild(statusSpan);
	orderList.appendChild(listItem);
};

const updateOrderStatus = (order) => {
	const listItem = document.getElementById(`order-${order.id}`);

	if (!listItem) return;

	const statusSpan = listItem.querySelector('.order-status');

	console.log(statusSpan);

	statusSpan.classList.remove('process');
	statusSpan.classList.add(order.status);

	statusSpan.textContent = statusOptions[order.status];
};

const processOrder = async (order) => {
	const simulateStatusChange = async (newStatus) => {
		const delayTime = (Math.floor(Math.random() * 8) + 1) * 1000;

		await new Promise((resolve) =>
			setTimeout(() => {
				order.status = newStatus;
				resolve();
			}, delayTime),
		);

		updateOrderStatus(order);
	};

	await simulateStatusChange('process');
	await simulateStatusChange('complete');
};
