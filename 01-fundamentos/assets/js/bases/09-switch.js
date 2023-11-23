

/* sintaxis de switch es igual que en c++ */
const dia = new Date();/* creamos una instancia de Date */

switch(dia.getDay()){/* pasamos el dia usando el metodo getDay */
    case 0:
        console.log('Hoy es Domingo');
        break;
    case 1:
        console.log('hoy es Lunes');
        break;
    case 2: 
        console.log('hoy es Martes');
        break;
    case 3: 
        console.log('hoy es Miercoles');
        break;
    case 4: 
        console.log('hoy es Jueves');
        break;
    case 5:
        console.log('Hoy es Viernes');
        break;
    default:/* si no es ninguna de las anteriores */
        console.log('Es fin de semana')
}