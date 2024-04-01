import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;
/**
 * 
 * @param {String} elemenId 
 * @param {Todo} todos 
 */
const renderTodos = ( elemenId ,todos=[] )=>{
    
    //TODO referencia
    if( !element )
        element = document.querySelector(elemenId);
    
    if( !element ) throw new Error('element ',elemenId ,'Not found');

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append( createTodoHTML(todo) );
    });
}

export{
    renderTodos,
};