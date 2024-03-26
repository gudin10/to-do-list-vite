import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";
/**
 * 
 * @param {String} elemenId 
 * @param {Todo} todos 
 */
const renderTodos = ( elemenId ,todos=[] )=>{
    
    //TODO referencia
    const element = document.querySelector(elemenId);

    todos.forEach(todo => {
        element.append( createTodoHTML(todo) );
    });
}

export{
    renderTodos,
};