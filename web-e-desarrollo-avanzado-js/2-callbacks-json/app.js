let biblioteca = [
	{ titulo: 'Cien años de soledad 2', autor: 'Gabriel García Márquez', genero: 'Realismo mágico', disponible: true },
	{ titulo: '1984', autor: 'George Orwell', genero: 'Distopía', disponible: true },
];

const obtenerBiblioteca = (callback) => {
	setTimeout(() => {
		callback(biblioteca);
	}, 1500);
};

const agregarLibro = (libro, index) => {
	const tableBody = document.getElementById('table-body');
	const row = document.createElement('tr');

	['titulo', 'autor', 'genero', 'disponible'].forEach((key) => {
		const column = document.createElement('td');
		if (key === 'disponible') column.innerText = libro[key] ? 'Disponible' : 'Prestado';
		else column.innerText = libro[key];
		row.appendChild(column);
	});

	const column = document.createElement('td');
	const button = document.createElement('button');
	button.classList.add('button');
	button.innerText = 'Actualizar';
	button.addEventListener('click', () => setTimeout(() => actualizarDisponibilidad(libro, index), 1000));

	column.appendChild(button);
	row.appendChild(column);

	tableBody.appendChild(row);
};

const mostrarLibros = () => {
	obtenerBiblioteca((datos) => {
		datos.forEach((libro, index) => agregarLibro(libro, index));
	});
};

const actualizarDisponibilidad = (libro, index) => {
	console.log(libro);
	const busqueda = biblioteca.find((l) => l.titulo === libro.titulo);

	if (!busqueda) return;

	busqueda.disponible = !busqueda.disponible;

	const tableBody = document.getElementById('table-body');
	const rows = tableBody.getElementsByTagName('tr');
	rows[index].children[3].innerText = busqueda.disponible ? 'Disponible' : 'Prestado';
};

const agregarForm = (event) => {
	event.preventDefault();

	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const genre = document.getElementById('genre').value;
	const availability = document.getElementById('availability').value;

	const libro = {
		titulo: title,
		autor: author,
		genero: genre,
		disponible: availability === 'disponible',
	};

	biblioteca.push(libro);
	agregarLibro(libro);

	document.getElementById('addBookForm').reset();

	document.getElementById('addBookFormContainer').classList.add('hidden');
};

document.getElementById('addBookForm').addEventListener('submit', agregarForm);
mostrarLibros();
