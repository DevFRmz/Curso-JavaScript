
/* creamos una variable juan que sera igual a un objeto con la propiedad "nombre" y el valor "Juan" */
let juan = {nombre: 'Juan'};
let ana = juan;
console.log(juan, ana);/* vemos que la impresion muestra dos veces lo mismo, pues igualamos a ana al mismo valor de juan */

ana.nombre = 'Ana';/* cambiamos el valor de la propiedad "nombre" a "Ana" */
console.log(juan, ana);/* vemos que al cambiar el valor de nombre en el objeto ana tambien se cambia en el objeto 
                        juan, y esto es porque todos los objetos se pasan por referencia, solo los tipos de datos
                        primitivos(int, string, etc) se pasan por valor */


/* para poder pasarlo por valor se utiliza las llaves y tres puntos {...objeto} */
let raul = {nombre: 'raul'};
let lalo = {...raul};/* de esta manera se pasa por valor y no por referencia, lo que evitara que se modifique el valor del objeto raul si lo modificamos en lalo */
lalo.nombre = 'Lalo';/* solo se modifica en lalo y no en raul */
console.log(raul,lalo);

/* Esto tambien pasa con los arreglos, solo que para evitar pasar por referencie se utilizan los corchetes seguido de los tres puntos */
let frutas = ['manzana', 'platano', 'pera'];
let otrasFrutas = [...frutas];
otrasFrutas.push('Naranja');
/* le agragamos un elemento a otrasFrutas pero no se agregara a frutas porque no se paso por referencia si no por valor */
console.table({frutas, otrasFrutas});

