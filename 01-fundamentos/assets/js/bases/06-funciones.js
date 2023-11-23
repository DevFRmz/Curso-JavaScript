
/* Forma tradicional de hacer funciones */
function saludo() {
    console.log('Hola, buen dia');
}
saludo();



/* Funcion anonima */
const saludo2 = function() {
    console.log('Que tal todo');
}
saludo2();/* llamado a la funcion */



/* Lambda function / Funcion de flecha */
const saludo3 = () => {
    console.log('Como estas?');
}
saludo3();




/* retorno de una funcion */

/* retorno con funcion tradicional */
function suma( a, b ){
    return a + b;
}
console.log(suma( 5, 7 ));

/* retorno con funcion anonima */
const suma2 = function( a, b ){
    return a + b;
}
console.log(suma2( 2, 5 ));

/* retorno con funcion de flecha */
const suma3 = ( a, b ) => {
    return a + b;
}

/* si solo ejecutaras una instruccion de retorno puedes hacerla de esta manera */
const suma4 = ( a, b) => a + b;
console.log(suma4( 2, 3));




/* Retornar un numero aleatorio con el objeto "Math" y el metodo "random()" */
function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());

/* con funcion de flecha */
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());





/* tambien puedes retornar como objeto, solo debes encerrar entre llaves lo que quieres retornar */
const retornarComoObjeto = (nombre, apellido) => ({ nombre, apellido })
console.log(retornarComoObjeto( 'Felipe', 'Ramirez' ));

/* en una funcion tradicional seria de esta manera */
function retornarObjeto(nombre, apellido){
    return{nombre, apellido};
}
console.log(retornarObjeto( 'Jose', 'Solis' ));