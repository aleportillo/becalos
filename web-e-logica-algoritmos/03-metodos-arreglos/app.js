const productos = [
    { img:'item_1', nombre: "Gelatina", precio: 20 , categoria: "Postres"},
    { img:'item_2', nombre: "Paleta", precio: 25 , categoria: "Postres"},
    { img:'item_3', nombre: "Gelletas", precio: 50 , categoria: "Postres"},
    { img:'item_4', nombre: "Manzana dulce", precio: 15 , categoria: "Postres"},
    { img:'item_5', nombre: "Gelletas decoradas", precio: 80 , categoria: "Postres"},
    { img:'item_6', nombre: "Pastel", precio: 120 , categoria: "Postres"},
    { img:'item_7', nombre: "Refresco", precio: 25 , categoria: "Bebidas"},
    { img:'item_8', nombre: "Donas", precio: 20 , categoria: "Postres"},
    { img:'item_11', nombre: "Donas", precio: 20 , categoria: "Postres"},
    { img:'item_9', nombre: "Muffin", precio: 70 , categoria: "Postres"},
    { img:'item_10', nombre: "Chocolates decorados", precio: 200 , categoria: "Postres"},
    { img:'item_12', nombre: "Donas rellenas", precio: 25 , categoria: "Postres"},
    { img:'item_13', nombre: "Dulce o truco", precio: 250 , categoria: "Postres"},
    { img:'item_14', nombre: "Dulces", precio: 50 , categoria: "Postres"},
    { img:'item_15', nombre: "Dedos de queso", precio: 90 , categoria: "Postres"},
];


const itemsContainer = document.querySelector('.items-container');
const filterSelect = document.querySelector('.filter-select');
const categoriesContainer = document.querySelector('.categories-container');
const categoriesCount = document.querySelector('.categories-count');


const dibujarProductos = (arreglo) => {
    arreglo.forEach(p => {
        const nombre = document.createElement('h2');
        const imagen = document.createElement('img');
        const precio = document.createElement('p');
        const categoria = document.createElement('p');
        const tarjeta = document.createElement('button');
    
        nombre.innerText = p.nombre;
        precio.innerText = `$${p.precio}.00`;
        categoria.innerText = `#${p.categoria}`;
        imagen.src=`./assets/${p.img}.webp`;
        imagen.alt=p.nombre;
    
        categoria.classList.add('category');
        tarjeta.classList.add('card');
    
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(categoria);
    
        itemsContainer.appendChild(tarjeta);
    
    });
}

productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
dibujarProductos(productos);


filterSelect.addEventListener("change", () => {

    const target = filterSelect.value;
    itemsContainer.innerHTML = '';

    if(target === 'all'){
        dibujarProductos(productos);
        return;
    }

    if(target === '49'){
        dibujarProductos(productos.filter(p => p.precio <= 50));
        return;
    }

    if(target === '50-99'){
        dibujarProductos(productos.filter(p => p.precio > 50 && p.precio < 100 ));
        return;
    }

    if(target === '100'){
        dibujarProductos(productos.filter(p => p.precio > 50 && p.precio >= 100 ));
        return;
    }

});


const categories = [...new Set(productos.map(p => p.categoria).sort((a, b) => a - b))];

categories.forEach(c => {

    const cat = document.createElement('span');

    cat.innerText = `#${c} `;

    categoriesContainer.appendChild(cat);
});

const total = productos.reduce((acc, current) => {
    if(!acc[current.categoria]) acc[current.categoria] = 0;

    acc[current.categoria] ++;
    
    return acc;
}, {});

Object.keys(total).forEach(k => {
    const cat = document.createElement('span');

    cat.innerHTML = `${k} (${total[k]}) <br/>`;

    categoriesCount.appendChild(cat);
});


