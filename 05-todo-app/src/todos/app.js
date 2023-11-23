import html from './app.html?raw'//utilizamos el " ?raw " para poder importar el html, esta es funcion de vite, no es posible con vanilla js
import { renderTodos } from './use-cases/index'
import todoStore from '../store/todo.store';

const referenciasHTML = {
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input'
}

/**
 * 
 * @param {String} elementoId 
 */
export const App = (elementoId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( referenciasHTML.todoList, todos );
    } 

    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementoId).append(app);
        displayTodos();
    })();

    //referencias HTML
    const newDescriptionInput = document.querySelector( referenciasHTML.newTodoInput );
    const todoListUL = document.querySelector( referenciasHTML.todoList );

    //agregamos un evento para cuando se presione una tecla y la suelte "keyup"
    newDescriptionInput.addEventListener('keyup', (event) => {
        //si la tecla es diferente a enter (13) se sale de la funcion
        if(event.keyCode !== 13) return;

        //agregamos el valor al todo, target es el elemento html el cual es el input y con value obtenemos su valor
        todoStore.addTodo(event.target.value);
        //agregamos el todo al html
        displayTodos();
        //borramos el valor que se tenia para que no siga en el input y pueda agregar otro
        event.target.value = '';
    })

    todoListUL.addEventListener('click', (event) => {
        //closest busca al elemento padre mas cercano que tenga el atributo que quieras
        //En este caso si se da click a un elemento li donde estan los todos, buscara al 
        //elemento padre que tenga el atributo data-id y lo retorna
        const element = event.target.closest('[data-id]');
        //cuando sabemos el elemnto que se dio click, le cambiamos el done a true,
        //con el metodo getAttribute obtenemos el valor del atributo que queramos
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    todoListUL.addEventListener('click', (event) => {
        //guardamos la referencia al elemento que se dio click
        const element = event.target.closest('[data-id');
        //verificamos si el elemento tiene la clase destroy, si es asi retorna true
        const destroy = event.target.className === 'destroy';
        //si no tiene la clase destroy no hace nada
        if(!destroy) return;
        
        //si se toca el boton con la clase destroy eliminamos el elemento
        todoStore.deleteTodo(element.getAttribute('data-id'));
        //volvemos a mostrar los todos actualizados 
        displayTodos();
    })




}