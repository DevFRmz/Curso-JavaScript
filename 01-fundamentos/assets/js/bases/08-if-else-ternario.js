/* condicionales */
/* en el condicional if se puede utilizar el doble igual "==" y este solo verifica si el valor es el mismo dando
    igual que tipo de dato sea, en este caso se compara un entero con un string y dara verdadero por que su 
    valor es el mismo aunque el tipo de dato es diferente */
if(1 == '1'){
    console.log('1 es igual a "1"');
}else{
    console.log('1 es diferente a "1"')
}

/* si queremos verificar si el valor es el mismo pero que tambien su tipo de dato sea el mismo usamos 
el triple igual "===" */
if(1 === '1'){/* como estamos usando triple igual dara falso por que son diferentes tipos de datos */
    console.log('1 es igual a "1"');
}else{
    console.log('1 es diferente a "1"');
}

/* tambien estan los operadores "and = &&" y "or = ||" */
if(1 === 1 && 2 === 3){/* resultara falso porque solo se cumple una condicion de las dos, y para que sea true deberian cumplirse las dos */
    console.log('esta condicional es verdadera');
}else{
    console.log('esta condicional es falsa');
}

if(3 === 1 || 2 === 2){/* resultara verdadero por que por lo menos cumple una condicion, y es lo que hace el "||", verificar si por lo menos se cumple una*/
    console.log('esta condicional es verdadera');
}else{
    console.log('esta condicional es falsa');
}








let hoy = new Date();/* creamos una instancia de la clase Date */
let dia = hoy.getDay();/* utilizamos el metodo getDay que obtiene el dia de la semana en base a tu zona horaria,
                         retorna 0 si es domingo, 1 lunes y asi hasta el sabado */

let diasLetrasObjeto = {/* creamos un objeto con los dias de la semana */
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
let diasLetrasArreglo = [/* tambien se puede hacer con un arreglo y es lo mismo, incluso mejor porque no ocupas especificar el indice */
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
]

console.log('Hoy es: ', diasLetrasObjeto[dia]);/* mostramos el dia que es utilizando como indice el valor que dio el 
                                            metodo getDay() */
console.log('Hoy es: ', diasLetrasArreglo[dia]);/* haciendo lo mismo pero utilizando el arreglo en lugar del objeto */

/* tambien puedieras hacer esto con condicionales y sin el objeto o arreglo diasLetras pero es menos eficiente  */



/* ----- operadores ternarios ------ */
/* esta es la estructura: se pone la condicional entre parentesis de preferencia, pero no es obligatorio "()" despues un signo de
 interrogacion "?" seguido de lo que quieres retornar si la condicion se cumple, despues el signo de dos puentos ":" seguido 
 de lo que quieres retornar si no se cumple la condicion */
const mensaje = ( diasLetrasArreglo[dia] === 'Miercoles' ) ? 'hoy es miercoles' : 'Hoy no es miercoles';

console.log(mensaje);/* se mostrara "Hoy no es miercoles" porque hoy que estoy haciendo el programa es lunes y no se cumple la condicion*/


/* otro ejemplo de uso */
const elMayor = ( a, b ) => {
    return(a > b) ? a : b;
}
console.log(elMayor(78,61));
/* este ejemplo mas simplificado seria */
const elMayor2 = ( a, b ) => (a > b) ? a : b;
console.log(elMayor2(78,61));

/* otro uso seria en darle un valor a una posicion de un arreglo dependiendo de otra variable */
let amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. strange',
    amigo ? 'Thor' : 'Loki',/* como amigo es "true" el valor que se le dara a esta posicion sera Thor, si cambiamos a "false" tomara Loki*/
]
console.log(amigosArr);


/* otro uso para evitar muchas condicionales */

let calificacion = 87;
const calificacionLetra = calificacion >= 95 ? 'A+' :
                          calificacion >= 90 ? 'A'  :
                          calificacion >= 85 ? 'B+' :
                          calificacion >= 80 ? 'B'  :
                          calificacion >= 75 ? 'C+' :
                          calificacion >= 70 ? 'C'  : 'F';
console.log(calificacion, calificacionLetra);