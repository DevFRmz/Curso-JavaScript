
//retorna un numero entre 0 y 19
const randomNumber = () => {
    return Math.floor(Math.random() * 20);
}

const fetchCharacter = async() => {
    const resolve = await fetch('https://rickandmortyapi.com/api/character');
    const data = await resolve.json();
    return data.results[randomNumber()];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickAndMortyApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Rick And Morty App';
    element.innerHTML = 'loading...';

    const name = document.createElement('h2');
    const species = document.createElement('h3');
    const image = document.createElement('img');
    const nextButton = document.createElement('button');


    const renderCharacter = async(character) => {
        name.innerHTML = `${character.name}`;
        species.innerHTML = `${character.species}`;
        image.setAttribute('src', character.image);
        nextButton.innerText = 'Other character';
        element.replaceChildren(name, species, image, nextButton);
    }

    nextButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const character = await fetchCharacter();
        renderCharacter(character);
    });


    fetchCharacter()
        .then(renderCharacter)
}