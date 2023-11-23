import {Todo} from '../todos/models/todo.model';

const filters = {
    All: 'all',
    Complete: 'complete',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Curso de JavaScript'),
        new Todo('Hacer de comer'),
        new Todo('Hacer tarea'),
    ],
    filter: filters.All
}

const initStore = () => {
    console.log(state);
    loadStore();
}

const loadStore = () => {
    //si no hay nada en el local storage sale de la funcion
    if(!localStorage.getItem('state')) return;

    //llamamos al objeto global JSON y al metodo parse que cambia de string a objeto,
    //esto lo hacemos para poder asignar el state del local storage al state de la aplicacion,
    //y hacemos una destructuracion de los elementos del state para poder asignarlos, ya que
    //no podemos igualar directamente el state al valor de JSON.parse( localStorage.getItem('state') ),
    //porque state es una constante
    const {todos, filter = filters.All} = JSON.parse( localStorage.getItem('state') );
    //igualamos los valores del state del local storage al de la aplicacion
    state.todos = todos;
    state.filter = filter;
}

//guardar el estado en el almacenamiento local
const saveStateToLocalStorage = () => {
    //usamos el objeto global localStorage y llamamos el metodo setItem que lo que hace
    //es ingresar un item al almacenamiento local, este metodo recibe dos argumentos, la llave 
    //(como lo identificaremos) y el valor, el valor solo puede ser string, y como el state que
    //queremos guardar es un objeto, entonces utilizamos el objeto global JSON y llamamos al metodo
    //stringify que recibe como argumento el objeto que queremos cambiar a string
    localStorage.setItem('state',JSON.stringify(state));
}


/**
 * si no se pasa ningun filtro, por defecto sera 'all'
 * @param {filters} filter 
 */
const getTodos = (filter = filters.All) => {
    switch(filter){
        case filters.All:
            //retornamos todos los todos pero NO por referencia, por eso
            //se coloca entre llaves y tres puntos
            return [...state.todos];

        case filters.Complete:
            /* El método filter() crea un nuevo array con todos los elementos 
               que cumplan la condición implementada por la función dada. */
            return state.todos.filter(todo => todo.done);

        case filters.Pending:
            return state.todos.filter(todo => !todo.done);
        
        default:
            throw new Error(`El filtro "${filter}" no es valido`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if(!description)
        throw new Error('descripcion is required');
    state.todos.push(new Todo(description));

    //guardamos el state en el local storage
    saveStateToLocalStorage();
}

const toggleTodo = ( todoId ) => {
    if(!todoId)
        throw new Error('todoId is required');

    state.todos = state.todos.map(todo => {
        if(todoId === todo.id){
            todo.done = !todo.done;
        }
        return todo;
    })
    //guardamos el state en el local storage
    saveStateToLocalStorage();
}

const deleteTodo = ( todoId ) => {
    if(!todoId)
        throw new Error('todoId is required');
    //regresa un arreglo sin el to do que tenga el id ingresado
    state.todos = state.todos.filter(todo => todo.id != todoId);

    //guardamos el state en el local storage
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    //regresa un arreglo de los to dos que no cumplan la condicion de completados
    //de esa manera tenemos un arreglo de to dos sin completar
    state.todos = state.todos.filter(todo => !todo.done);

    //guardamos el state en el local storage
    saveStateToLocalStorage();
}
/**
 * si no se pasa ningun filtro, por defecto sera 'all'
 * @param {filters} newFilter 
 */
const setFilter = ( newFilter = filters.All ) => {
    state.filter = newFilter;

    //guardamos el state en el local storage
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    setFilter,
    toggleTodo,
}