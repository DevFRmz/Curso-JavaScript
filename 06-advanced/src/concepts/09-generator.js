
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {

    const button = document.createElement('button');
    button.innerText = 'click me'
    element.append(button);
    
    const genId = idGenerator();

    const renderId = () => {
        //desestructuramos el objeto 
        const { value } = genId.next();
        button.innerHTML = `click ${value}`;
    } 

    button.addEventListener('click', renderId);
}

//esta es una funcion generadora
function* generatorFunction (){
    //en las funciones generadoras se desbloquea la palabra reservada yield
    //lo que hace es retornar un valor como con return, pero continuando la ejecucion del programa
    //de esta manera retornas multiples valores
    yield('Primer valor');
    yield('segundo valor');
    yield('tercer valor');
    yield('cuarto valor');
    return('ultimo valor');
}

//este es un caso de uso de una funcion generadora
function* idGenerator(){
    let id = 0;

    while(true){
        yield ++id;
    }
}