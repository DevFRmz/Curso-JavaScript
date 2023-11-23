// Declarar variables
/* let te permite declarar variables limitando su alcance (scope)
 al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var 
 la cual define una variable global o local en una función sin importar el ámbito del bloque */

let a = 3, b = 10, c = a + b;

var x = 3, y = 10, z = x - y;

const noCambiaValor = 'este es el valor de la constante';

let datoSymbol = Symbol();/* symbol permite crear identificadores unicos, nunca sera igual a otro */

let nombre = 'Felipe'
let apellido = 'Ramirez'
let nombreCompleto = nombre + apellido;


console.log(a, z, noCambiaValor, nombreCompleto);