const fs = require('fs');

const notesPath = './notas.json';

let allNotes = [];

const cargarNotas = () => {
    const existenNotas = fs.existsSync(notesPath);

    if(!existenNotas){
        fs.writeFileSync(notesPath, JSON.stringify({ notas: [] }, null, 2), 'utf8');
    }

    const data = fs.readFileSync(notesPath, 'utf8');

    if(data){
        allNotes = JSON.parse(data)?.notas;
    } else{
        allNotes = [];
    }
}

const agregarNota = (titulo, contenido) => {
    
    if(allNotes.some(n => n.titulo === titulo)){
        console.log('Ya hay una nota con ese titulo');
        return;
    }

    allNotes.push({titulo, contenido});

    fs.writeFileSync(notesPath, JSON.stringify({ notas: allNotes }, null, 2), 'utf8');
    console.log('Nota agregada con éxito.');
}


const listarNotas = () => {
    if(!allNotes.length){
        console.log('No hay notas guardadas.');
        return;
    }

    console.log('📝 Notas:');
    allNotes.forEach((n, i) => {
        console.log(`${i + 1}. ${n.titulo} - ${n.contenido}`);
    });
    
}

const eliminarNota = (titulo) => {
    allNotes = allNotes.filter(n => n.titulo !== titulo);
    fs.writeFileSync(notesPath, JSON.stringify({ notas: allNotes }, null, 2), 'utf8');
    console.log('Nota borrada con éxito.');
}


cargarNotas();
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Tareas', 'Terminar el proyecto de matemáticas.');
agregarNota('Citas', 'Ir al dentista el martes a las 4pm.');
agregarNota('Ideas', 'Crear una app para organizar notas.');
agregarNota('Libros', 'Leer “El nombre del viento” este mes.');
agregarNota('Recordatorios', 'Llamar a mamá el viernes.');
agregarNota('Películas', 'Ver “Dune” el fin de semana.');
agregarNota('Viaje', 'Empacar ropa y pasaporte.');
listarNotas();
eliminarNota('Compras');