import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbackComponent = ( element ) => {

    const id = '5d86371f25a058e5b1c8a65e';
    findHero( id, (error, hero) => {
        if(error){
            element.innerHTML = error;
            return;
        }

        element.innerHTML = hero.name;
    })
}

//callbackHell es un callback que manda a llamar otro callback y asi las veces que sean necesarias
export const callbackHellComponent = (element) => {
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f2343e37870b91ef1';

    findHero(id1, (error, hero1) => {
        if(error){
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {
            if(error){
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        })
    })
}

/**
 * 
 * @param {String} id 
 * @param {(error: String | null, hero: Object) => void} callback 
 */
const findHero = ( id, callback ) => {
    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        callback(`Hero with id ${id} not found`);
        return;
    }

    callback(null, hero);
}