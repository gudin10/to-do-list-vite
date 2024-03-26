import html from './app.html?raw';
import todoStore from '../store/todo.store'
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList : '.todo-list',
}
/**
 * @param {String}elemenId  
 */
const App = ( elemenId )=>{
    
    const displaytodos = ()=>{
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos( elementIDs.TodoList, todos );
    }
    //fun anonima autoinvoncada
    //cuando la funcion App() se llama.
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elemenId).append( app );
        
        displaytodos();
    })();
}

export{
    App,
};