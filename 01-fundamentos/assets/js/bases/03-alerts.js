// Alert
/* alert muestra una ventana de alerta y no se sigue ejecutando el codigo hasta que se le da click a ella */
alert('Hola mundo');

//Prompt
/* prompt muestra una ventana con un input y los parametros que recibe son el mensaje y el valor por defecto */
prompt('¿Cual es tu nombre?', 'sin nombre');
/* prompt retorna el valor que se ingrese y lo puedes guardar en variables  */
let nombre = prompt('¿Cual es tu nombre?', 'sin nombre');
console.log(nombre);


//Confirm
/* confirm muestra una ventana de confirmacion y retorna un booleano, resibe el mensaje como parametro */
confirm('¿Esta bien tu nombre?');