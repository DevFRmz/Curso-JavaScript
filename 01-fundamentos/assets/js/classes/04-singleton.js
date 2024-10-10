/**
 Un patrón de diseño Singleton es un patrón de diseño creacional que garantiza
 que una clase tiene una única instancia y proporciona un punto de acceso global
 a esa instancia. En otras palabras, se asegura de que una clase solo tenga una
 instancia y proporciona un método para acceder a esa instancia desde cualquier
 punto del programa.
 */

class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {
        //si ya hay una instancia creada, no crea otra y devuelve la que ya esta 
        if(Singleton.instancia){
            return Singleton.instancia;
        }

        //Inicializacion de la instancia
        this.nombre = nombre;

        // Marcar la instancia como creada
        Singleton.instancia = this;
    }
}


/* si intentas crear múltiples instancias de MiSingleton, obtendrás siempre
 la misma instancia. */
const instancia1 = new Singleton('Desarrollo');
const instancia2 = new Singleton('Programacion');
//las dos instancias tendran el valor de la primera aunque le pongas valores diferentes
//al constructor
console.log(`nombre de instancia 1: ${instancia1.nombre}`);
console.log(`nombre de instancia 2: ${instancia2.nombre}`);

console.log(instancia1 === instancia2); // true (ambas referencias apuntan a la misma instancia)
