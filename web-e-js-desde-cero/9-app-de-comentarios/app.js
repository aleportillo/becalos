const formHTML = document.getElementById('form');
const inputHTML = document.getElementById('input');
const nameHTML = document.getElementById('name');
const commentsHTML =document.getElementById('comments');


let commentsArray = [];

const printMessage = (data) => {
    const newCommentHTML = document.createElement("li");
    newCommentHTML.innerHTML = `
        <p> <b> ${data.user} </b> ${data.date} </p>
        <p> ${data.comment} </p>
        <button id=${data.id}> Eliminar </button>
    `;

    newCommentHTML.getElementsByTagName('button')[0].addEventListener("click", (event) => {
        commentsArray = commentsArray.filter(c => c.id !== Number(event.target.id));
        newCommentHTML.remove();
        localStorage.setItem('APP_COMMENTS', JSON.stringify(commentsArray));
    });

    commentsHTML.appendChild(newCommentHTML);
}


const addComment = (event) => {

    event.preventDefault();

    if(inputHTML.value.trim() === "") return;

    const commentData = {
        id: 0,
        date: new Date().toLocaleString(),
        comment: inputHTML.value,
        user: nameHTML.value || 'Anonimo'
    }

    commentData.id = (commentsArray.at(-1)?.id || 0) + 1;
    printMessage(commentData);
    commentsArray.push(commentData);
    localStorage.setItem('APP_COMMENTS', JSON.stringify(commentsArray));
    inputHTML.value = '';
    nameHTML.value = '';
}


formHTML.addEventListener("submit", addComment);

document.addEventListener('DOMContentLoaded', () => {
    commentsArray = JSON.parse(localStorage.getItem('APP_COMMENTS') || '[]');
    commentsArray.forEach(c => {
        printMessage(c);
    });
});
