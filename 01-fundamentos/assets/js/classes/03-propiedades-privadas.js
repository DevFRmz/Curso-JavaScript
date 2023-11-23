

class Rectangulo {
    //para crear atributos privados para que no se puedan modificar fuera de la clase
    //utilizamos el signo de numeral " # " antes del nombre
    #area = 0;

    constructor (base, altura) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    //los metodos no se pueden hacer privados, asi que no uses # 
    get getArea () {
        return this.#area;
    }
}

const rectangulo = new Rectangulo(10,5);
//Al intentar cambiar el valor del atributo privado fuera de la clase nos dara error
rectangulo.#area = 4;

console.log(rectangulo)