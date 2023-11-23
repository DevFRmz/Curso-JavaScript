

class Empleado {
 /*  Cuando un método o propiedad se declara como estático, significa que
  está asociado con la clase en sí misma en lugar de con instancias individuales
   de la clase. Esto significa que puedes llamar a un método estático o acceder
    a una propiedad estática sin necesidad de crear una instancia de la clase. */
    static _conteo = 0;

/* Atributos, (Puede no colocarlos y solo hacer la referencia en el constructor) */
    nombre;
    codigo;
    puesto;

    /* Metodo Constructor */
    constructor(nombre, codigo, puesto) {
    /* hacemos referencia al atributo de la clase con la palabra reservada this */
        this.nombre = nombre;
        this.codigo = codigo;
        this.puesto = puesto;
        //sumando cada instancia creada sumando 1 a la propiedad estatica _conteo
        Empleado._conteo++;
    }

    /* Setters */
    set setNombre(nombre){
        this.nombre = nombre;
    }

    set setCodigo(codigo){
        this.codigo = codigo;
    }

    set setPuesto(puesto){
        this.puesto = puesto;
    }

    /* Guetters */
    get getNombre(){
        return this.nombre;
    }

    get getCodigo(){
        return this.codigo;
    }
    
    get getPuesto(){
        return this.puesto;
    }

    /* Metodos */
    quienSoy(){
        console.log(`Soy ${this.nombre} y trabajo como ${this.puesto}`);
    }

}
/* En JavaScript si no mandas como argumento algun valor que se pide en el constructor
    no marcara error como en otros lenguajes si lo hacen, unicamente colocara el valor
    de undefined en la propiedad */
const luis = new Empleado();/* nombre: undefined, codigo: undefined, puesto: undefined */

/* De esta manera se debe crear una instancia de una clase */
const felipe = new Empleado('Felipe', '2243', 'Web Developer');

console.log(felipe);

/* utilizar set para establecer valores */
// Al llamar el metodo set no se ponen los parentesis "()", se usa como propiedad;
luis.setNombre = 'Luis';
luis.setCodigo = '3384';
luis.setPuesto = 'Designer';
console.log(luis);

/* Utilizar get para obtener valores */
/* en el get tampoco se ponen los parentesis "()", se usa como propiedad*/
console.log(felipe.getNombre)

/* Para llamar a un metodo se pone el objeto seguido de un punto y el metodo  */
felipe.quienSoy();
