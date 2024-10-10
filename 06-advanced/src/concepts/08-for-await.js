import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    //obtener ids de heroes
    const heroIds = heroes.map(hero => hero.id);

    //obtener las promesas
    const heroPromises = getHeroesAsync(heroIds);

    //pasar por todas las promesas del arreglo
    for await(const hero of heroPromises){
        element.innerHTML += `${hero.name} <br>`;
    }
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}