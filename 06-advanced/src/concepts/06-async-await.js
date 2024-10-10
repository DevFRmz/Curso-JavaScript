import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => {

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f2343e37870b91ef1';

    try {
        //para usar el await se debe hacer dentro de una funcion async
        //el await soluciona el callbackHell o promiseHell y devuelve el valor de la promesa resuelta
        const hero1 = await(findHero(id1));
        const hero2 = await(findHero(id2));
        
        element.innerHTML = `${hero1.name} - ${hero2.name}`;

    } catch (error) {
        element.innerHTML = error;
    }
}

const findHero = async(id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw('hero not found')

    return hero;
}