import html from './app.html?raw';
import todoStore from '../store/todo.store'
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList : '.todo-list',
    NewTodoInput: '.new-todo',
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

    /**Referencias de HTML */

    const newDescriptionInput = document.querySelector(elementIDs.NewTodoInput);
    const todoListUL = document.querySelector(elementIDs.TodoList);

    /**Listeners */
    newDescriptionInput.addEventListener('keyup',(event)=>{
        //console.log(event);
        //console.log(event.target.value);
        
        if(event.keyCode !== 13) return; // Enter
        if(event.target.value.trim().lenght ===0) return;

        todoStore.addTodo( event.target.value );
        displaytodos();
        event.target.value='';
    });

    todoListUL.addEventListener('click',(event)=>{
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displaytodos();
    });

    todoListUL.addEventListener('click',(event)=>{
        const isDestroyer = event.target.className ==='destroy';
        const element = event.target.closest('[data-id]');
        if( !element || !isDestroyer ) return;

        //const element = event.target.closest('[data-id]');
        todoStore.deleteTodo( element.getAttribute('data-id') );
        displaytodos();
    });
}

export{
    App,
};