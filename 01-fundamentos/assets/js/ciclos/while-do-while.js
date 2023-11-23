
/* while tiene la misma sintaxis que en c++ */
const colores = [
    'rojo',
    'blanco',
    'verde',
    'amarrillo',
    'azul'
]
let i = 0;
while(colores[i]){/* se repite hasta que recorre todo el arreglo, ya que al llegar a una posicion que no existe devuelve undefined y se sale del ciclo */
    console.log(colores[i]);
    i++;
}


let j = 0;
do{
    console.log(colores[j])
    j++;
}while(j <= colores.length);