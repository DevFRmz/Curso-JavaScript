// Arreglos o Arrays

/* Manera no popular de hacer los arreglos, 10 es el tamaño del arreglo */
const arr = new Array(10);

/* manera estandar de hacer un arreglo  */
let videojuegos = ['God of War', 'Pac Man', 'Metal Gear'];

/* lo muestro en forma de objeto */
console.log({videojuegos});

/* muestro la primer posicion */
console.log(videojuegos[0]);

/* muestro la ultima posicion */
console.log(videojuegos[videojuegos.length - 1]);

/* UN ARREGLO FUEDE TENER CUALQUIER TIPO DE DATO, INCLUSO FUNCIONES Y OBJETOS */

let arreglo = [
    'pluma',
    44,
    43.54,
    true,
    ['dentroDeOtroArreglo', 'dentroDeOtroArreglo2'],
    {nombre: 'luis',a: 5}
]

/* mostrando la posicion 4 que es otro arreglo y mostramos la posicion 1 de ese */
console.log(arreglo[4][1]);




/* mostrando la cantidad de elementos con la propiedad length */
console.log(arreglo.length);



/* Si queremos consultar todos los elementos existe un metodo llamado forEach(),
 y este metodo va a ejecutar la funcion que le des la cantidad de veces que tenga de tamaño el arreglo */
/* recibe como argumento: elemento, indice, arreglo; nota que no son variables existentes son para utilizarlas dentro de la funcion */
videojuegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
});



/* lo anterior muestra el elemento, indice y arreglo, si solo quieres mostrar los elemento, seria asi: */
videojuegos.forEach((elemento) => {
    console.log(elemento);
});




/* si quieres agregar un elemento al final del arreglo utilizamos el metodo push(), este metodo
 recibe como argumento el elemento que se agregara y retorna el valor actual de longitud */
let nuevoLargo = videojuegos.push('CupHead');
console.log('Largo actual: ', nuevoLargo);




/* unshift hace lo mismo pero agrega el elemento al inicio */
    nuevoLargo = videojuegos.unshift('Blood borne');
    console.log(videojuegos);




/* para eliminar el ultimo elemento del array utilizas pop(), este metodo retorna el valor eliminado */
let juegoBorrado = videojuegos.pop();
console.log('juego borrado: ', juegoBorrado);
console.log(videojuegos);



/* para eliminar elementos en una posicion especifica utilizamos splice() */
/* los argumentos que recibe son la posicion que desas eliminar y cuantos elementos a partir de esa posicion quieres eliminar*/
let juegosBorrados = videojuegos.splice(1,2);
console.log('Juegos borrados: ', juegosBorrados);
console.log(videojuegos);



/* Si quieres buscar un elemento en especifico y quieres obtener su indice utiliza indexOf,
 si no encuentra el elemento retorna -1 */
let MetalGearIndex = videojuegos.indexOf('Metal Gear');
console.log('El indice del juego Metal Gear es: ', MetalGearIndex);

