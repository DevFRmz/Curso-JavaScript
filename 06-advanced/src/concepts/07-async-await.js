import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async( element ) => {
    console.time();

    /* const value1 = await(slowPromise());
    const value2 = await(mediumPromise());
    const value3 = await(fastPromise()); */
    
    //cuando se ejecutan varias promesas que no son secuenciales(que no dependen del valor de una promesa) como las anteriores
    //se usa esta otra que lo que hace es que se ejecuten todas a la vez, y de la anterior manera se ejecuta una por una
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `
        value1: ${value1} <br>
        value2: ${value2} <br>
        value3: ${value3} <br>
    `;
    
    console.timeEnd();
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow promise');
    }, 3000)
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium promise');
    }, 2000)
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 1000)
})