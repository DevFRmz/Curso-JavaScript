//Declaracion de pbjetos

/* los ebjetos llevan {}, y para darle valor a las propiedades se pone dos puntos : */
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};
console.log(personaje);



/* para acceder a una propiedad en especifico pones el objeto seguido de un punto y el nombre de la propiedad */
console.log(personaje.nombre);



/* o tambien puedes hacerlo asi */
console.log(personaje['nombre']);



/* buscando el numero de elementos que tiene el arreglo trajes del objeto personaje */
let trajesLenght = personaje.trajes.length;
console.log('La cantidad de trajes es: ', trajesLenght);




/* Mostrando el ultimo traje */
console.log(personaje.trajes[personaje.trajes.length - 1]);



/* Si queremos usar el objeto como arreglo necesitamos llamar a la clase "Object" y al metodo entries
    el cual recibe como argumento el objeto a convertir, este metodo retorna un arreglo que contiene otros arreglos
    con las propiedades y valores del objeto, la primera posicion sera la propiedad y la segunda el valor*/
const entriesPares = Object.entries(personaje);
console.log(entriesPares);



/* podemos añadir una propiedad que aun no existe directamente dandole un valor (incluso si el objeto es una 
    constante, ya que la constante solo bloquea que no cambie el valor de objeto como tal, por ejemplo una
    asignacion como esta "const personaje = []" o "const personaje = true" daria un error, ya que cambiarias
    el valor de objeto a arreglo o booleano en el caso de este ejemplo )*/
personaje.casado = true;
console.log(personaje);



/* Para eliminar una propiedad utilizamos "delete" seguido de la propiedad a eliminar,
 en este caso eliminaremos la propiedad de "edad" */
delete personaje.edad;
console.log(personaje);



/* Para evitar que se puedan cambiar las propiedades y su valor de un objeto se utiliza el metodo "freeze" del objeto
 "object" y se pasa como parametro el objeto a congelar */

Object.freeze(personaje);

personaje.casado = false;/* No cambiara el valor a false ya que el objeto personaje esta congelado */
personaje.habilidad = 'volar';/* no se agragara esta propiedad con su valor al objeto por que se uso el metodo freeze */

personaje.coords.lat = 'nuevo valor';/* aqui si se cambia el valor a pesar de usar el metodo freeze, y es porque 
                                        solo bloquea al primer nivel de hijos en este caso estamos accediendo 
                                        a la propiedad de un hijo, y no a un hijo directamente, por eso se puede
                                        cambiar */

console.log(personaje);




/* ----- Obtener propiedades de un objeto -----*/
/* para poder obtener las propiedades de un objeto se utiliza el metodo "getOwnPropertyNames()" del objeto "Object"
que recibe como argumento el objeto del que deseas obtener las propiedades, y retorna un arreglo con las propiedades*/
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);



/* ----- Obtener valores de un objeto ----- */
/* para obtener los valores se use el metodo "values" */
const valores = Object.values(personaje);
console.log(valores);
