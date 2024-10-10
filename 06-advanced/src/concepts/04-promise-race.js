/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {

    const renderValue = (value) => {
        element.innerHTML = value;
    }
    //el metodo race recibe las promesas que quieras pero solo devuelve el valor de la que se resuelve primero
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then(renderValue)
    .catch('error')
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