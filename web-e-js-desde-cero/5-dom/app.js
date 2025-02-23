const formHTML = document.getElementById('form');
const inputHTML = document.getElementById('input');
const commentsHTML =document.getElementById('comments');

const addComment = (event) => {

    event.preventDefault();

    if(inputHTML.value.trim() === "") return;

    const newCommentHTML = document.createElement("li");

    newCommentHTML.innerHTML = `
        <p> <b> User </b> ${new Date().toISOString().split('T')[0]} </p>
        <p> ${inputHTML.value} </p>
        <button> Eliminar </button>
    `;

    newCommentHTML.getElementsByTagName('button')[0].addEventListener("click", () => {
        newCommentHTML.remove();
    });

    commentsHTML.appendChild(newCommentHTML);

    inputHTML.value = '';

}


formHTML.addEventListener("submit", addComment);