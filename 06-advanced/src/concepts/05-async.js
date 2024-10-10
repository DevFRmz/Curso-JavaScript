import { heroes } from "../data/heroes"
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const id = '5d86371f25a058e5b1c8a65e';

    findHero(id)
        .then((hero) => {element.innerHTML = hero})
        .catch((error) => {element.innerHTML = error})
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async(id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw(`Hero with id ${id} not found`)

    return hero?.name;
}