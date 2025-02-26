const booksList = document.querySelector('#books-list');
const bookDescription = document.querySelector('#book-description');

let currentBook;

function descriptionBook() {
    return `Libro titulado "${this.title}", escrito por ${this.autor} en el año ${this.year}, el status es: ${this.status}.`;
}

function addChapter(chapter) {
    this.chapters.push(chapter);
}

function removeChapter(index){
    if(index >= this.chapters.length) {
        return;
    }
    this.chapters.splice(index, 1);
}

function displayCurrentBook(){
    if(!currentBook) return;
    // bookDescription.
    bookDescription.innerHTML = '';
    const resume =  document.createElement('p');
    const title =  document.createElement('h3');
    const title2 =  document.createElement('h3');
    const title3 =  document.createElement('h3');
    const chapters =  document.createElement('ul');
    const button =  document.createElement('button');
    const input =  document.createElement('input');
    title.innerText = 'Información';
    title2.innerText = 'Capítulos';
    title3.innerText = 'Nuevo capítulo';
    resume.innerHTML = `${currentBook.data.description()}`;

    currentBook.data.chapters.forEach((c, index )=> {
        const element = document.createElement('li');
        const button = document.createElement('button');

        button.innerText = 'X'
        button.addEventListener('click', () => {
            books[currentBook.index].removeChapter(index);
            element.remove();
        });

        element.appendChild(button);
        element.appendChild(document.createTextNode(c));
        chapters.appendChild(element);
    });

    button.innerText = 'Agregar';
    button.classList.add('add');
    button.addEventListener('click', () => {
        books[currentBook.index].addChapter(input.value);
        input.value = '';
        displayCurrentBook();
    });

    input.type = 'text';
    
    bookDescription.appendChild(title);
    bookDescription.appendChild(resume);
    bookDescription.appendChild(title2);
    bookDescription.appendChild(chapters);
    bookDescription.appendChild(title3);
    bookDescription.appendChild(input);
    bookDescription.appendChild(button);
}

function selectBook(data, row, index){
    currentBook = {
        data: data,
        index: index
    }
    const book = document.querySelector('.select');
    book?.classList?.remove('select');
    row.classList.add('select');
    displayCurrentBook();
}


const books = [
  {
    title: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    year: 1943,
    status: "disponible",
    chapters: [
      "El encuentro con el aviador",
      "El planeta del rey",
      "El zorro y su secreto",
    ],
    description: descriptionBook,
    addChapter: addChapter,
    removeChapter: removeChapter
  },
  {
    title: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    year: 1967,
    status: "prestado",
    chapters: [
      "La fundación de Macondo",
      "La peste del insomnio",
      "El amor de Remedios",
      "La llegada de los gitanos",
    ],
    description: descriptionBook,
    addChapter: addChapter,
    removeChapter: removeChapter
  },
  {
    title: "1984",
    autor: "George Orwell",
    year: 1949,
    status: "disponible",
    chapters: ["El Gran Hermano te observa", "El Ministerio de la Verdad"],
    description: descriptionBook,
    addChapter: addChapter,
    removeChapter: removeChapter
  },
  {
    title: "Orgullo y prejuicio",
    autor: "Jane Austen",
    year: 1813,
    status: "prestado",
    chapters: [
      "La llegada de Mr. Bingley",
      "Un baile memorable",
      "Los prejuicios de Elizabeth",
      "La propuesta de Darcy",
      "La reconciliación final",
    ],
    description: descriptionBook,
    addChapter: addChapter,
    removeChapter: removeChapter
  },
];

const loadBooks = () => {

    books.forEach((b, index)=> {
        const row = document.createElement('button');
        row.classList.add('card');
        row.innerHTML = `<h2> ${b.title} </h2>`;
        row.addEventListener('click', () => selectBook(b, row, index));
        booksList.appendChild(row);
    });
}

loadBooks();