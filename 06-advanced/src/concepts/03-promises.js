import { heroes } from "../data/heroes";

const renderHero = (hero, element) => {
    element.innerHTML = hero.name;
}

const renderTwoHeroes = (hero, hero2, element) => {
    element.innerHTML = `
        ${hero.name} / ${hero2.name}
    `;
}

const renderError = (error, element) => {
    element.innerHTML = error;
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const id1 = '5d86371f2343e37870b91ef1';

    //then si todo salio bien, si hubo error llama a catch
    findHero(id1)
        //puedes usar esta sintaxis como parametro
        .then(hero => renderHero(hero, element))
        .catch(error => renderError(error, element))

}

export const promiseHellComponent = ( element ) => {

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    findHero(id1)
        .then((hero) => {
            findHero(id2)
                .then(hero2 => renderTwoHeroes(hero, hero2, element))
                .catch(error => renderError(error, element));
        })
        .catch(renderError);
        
}

export const promiseAllComponent = (element) => {
    
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    Promise.all([
        findHero(id1),
        findHero(id2),
    ]).then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2, element) )
      .catch(error => renderError(error, element))
}

const findHero = ( id ) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if(hero){
            resolve(hero);
            return;
        }

        reject(`Hero with ${id} not found`);
        return;
    })
}