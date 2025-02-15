let librosLeidos = [];

function agregarLibro() {
    let libro = '';
  
    while (libro.toLowerCase() != "mostrar") {
      if(libro) librosLeidos.push(libro);
      libro = prompt("Añade un libro que hayas leído o escribe 'Mostrar' para ver la lista");
    }
  
    mostrarLibrosLeidos();
}

function mostrarLibrosLeidos() {
  if (librosLeidos.length > 0) {
    console.log("Libros que has leído:");
    for (let index = 0; index < librosLeidos.length; index++) {
        console.log(`${index + 1}.- ${librosLeidos[index]}`);
    }
  } else {
    console.log("No has leído ningún libro aún.");
  }
}


agregarLibro();