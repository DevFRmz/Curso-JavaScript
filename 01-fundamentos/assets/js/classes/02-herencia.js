//primera clase
class Empleado {
       nombre;
       codigo;
       puesto;
   
       /* Metodo Constructor */
       constructor(nombre, codigo, puesto) {
           this.nombre = nombre;
           this.codigo = codigo;
           this.puesto = puesto;
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




//creamos una clase gerente y agregamos extends para heredar los atributos y metodos
//de la clase Empleado
class Gerente extends Empleado{
    //creamos propiedad unica de la clase gerente
    salario;

    //creamos constructor y pasamos los argumentos de la clase padre
    constructor(nombre, codigo, puesto, salario) {
        //con super accedes al constructor de la clase padre
        super(nombre, codigo, puesto);
        this.salario = salario;
    }
}

//creamos instancia de clase Gerente
const Juan = new Gerente('Juan', 22249, 'Gerente de ventas', 6400);
console.log(Juan);
//Tambien puedes acceder a los metodos de la clase padre
console.log(Juan.quienSoy());