import { Todo } from "../models/todo.model";
import { createTodoHTML } from './index.js'

let element;

/**
 * 
 * @param {HTMLElement} elementoId id o clase html donde renderizar
 * @param {Todo} todos 
 */
export const renderTodos = (elementoId, todos = []) => {
    //si no se le ha asignado el valor a element se asigna 
    if(!element)
        element = document.querySelector( elementoId );
    //si aun no se encuentra un valor es porque no encontro el elemento del dom
    if(!element)
        throw new Error(`element ${elementoId} not found`)

    //limpiamos todo el texto que tenga para que no se duplique con la funcion de abajo
    element.innerHTML = '';

    //agregamos los todos al html
    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });
}