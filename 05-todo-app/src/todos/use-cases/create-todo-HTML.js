import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 * @returns 
 */
export const createTodoHTML = ( todo ) => {
    if(!todo)  
        throw new Error('todo is required');

    const html = `<div class="view">
                    <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
                    <label>${ todo.description }</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', todo.id);

    //si el todo esta completado agregamos la clase completed con classList.add()
    if(todo.done)
        liElement.classList.add('completed');

    return liElement;
}