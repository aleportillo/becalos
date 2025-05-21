const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');

const dataContainer = document.querySelector('.card-container');

const renderCharacters = (characters) => {
    dataContainer.innerHTML = '';
    characters.forEach(character => {
        const card = document.createElement('div');
        const details = document.createElement('div');
        const name = document.createElement('div');
        const info1 = document.createElement('div');
        const info2 = document.createElement('div');
        const img = document.createElement('img');

        img.classList.add('character-image');
        card.classList.add('character-card');
        details.classList.add('character-details');
        name.classList.add('haracter-name');
        info1.classList.add('character-info');
        info2.classList.add('character-info');

        info1.innerText = character.species;
        info2.innerText = character.status;
        name.innerText = character.name;
        img.src = character.image;

        details.appendChild(name);
        details.appendChild(info1);
        details.appendChild(info2);
        card.appendChild(img);
        card.appendChild(details);
        dataContainer.appendChild(card);
    });
}

const showSpinner = () => {
    dataContainer.innerHTML = '<div class="spinner"></div>';
}

fetchBtn.addEventListener('click', () => {
    showSpinner();
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            renderCharacters(data.results);
        })
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
        });
});

axiosBtn.addEventListener('click', () => {
    showSpinner();
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            const data = response.data;
            renderCharacters(data.results);
        })
        .catch(error => {
            console.error('Error:', error);
            dataContainer.textContent = 'Hubo un error al obtener los datos.';
        });
});