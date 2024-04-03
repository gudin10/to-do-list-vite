import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store'
import { renderTodos, renderPending } from './use-cases';

const elementIDs = {
    TodoList : '.todo-list',
    NewTodoInput: '.new-todo',
    ClearComplete: '.clear-completed',
    TodoFilters:'.filtro',
    PendingCountLabel: '#pending-count',
}
/**
 * @param {String}elemenId  
 */
const App = ( elemenId )=>{
    
    const displaytodos = ()=>{
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos( elementIDs.TodoList, todos );
        updatePendingCount();
    }

    const updatePendingCount = ()=>{
        renderPending(elementIDs.PendingCountLabel);
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
    const completadosBoton = document.querySelector(elementIDs.ClearComplete);
    const filtersLIs = document.querySelectorAll(elementIDs.TodoFilters);

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

    completadosBoton.addEventListener('click',()=>{
        todoStore.deleteComplete();
        displaytodos();
    });

    filtersLIs.forEach( element =>{
        element.addEventListener('click', (element)=>{
            filtersLIs.forEach( el=>el.classList.remove('selected') );
            element.target.classList.add('selected');

            switch(element.target.text){
                case 'Todos':
                    todoStore.setfilter( Filters.All );
                    break;
                case 'Pendientes':
                    todoStore.setfilter( Filters.Pending );
                    break;
                case 'Completados':
                    todoStore.setfilter( Filters.Completed );
                    break;

            }

            displaytodos();
        })
    });

    
}

export{
    App,
};