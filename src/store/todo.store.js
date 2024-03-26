import { Todo } from "../todos/models/todo.model";

const Filters = {
    All : 'all',
    Completed : 'Completed',
    Pending : 'Pending',
}
const state = {
    todos : [
        new Todo('Peidra del alma'),
        new Todo('Peidra ancha'),
        new Todo('Peidra tieme'),
        new Todo('Peidra realidad'),
        new Todo('Peidra Fuego'),
    ],
    filter : Filters.All
}

const initStore = ()=>{
    console.log(state);
    console.log('Initstore :3')
}

const loadStore = ()=>{
    throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All )=>{
    
    switch( filter ){
        case Filters.All :
            return [...state.todos];
        case Filters.Completed :
            return state.todos.filter( todo => todo.done);
        case Filters.Pending :
            return state.todos.filter( todo => !todo.done);//falso
        default:
            throw new Error(`Option ${filter} is not valid.`);

    }

}
/**
 * 
 * @param {String} description 
 */
const addTodo= ( description )=>{
    if( !description ) throw new Error('Description is required');

    state.todos.push( new Todo(description) );
}

const toggleTodo = ( todoId )=>{
    state.todos = state.todos.map( todo =>{
        if( todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    })
}

const deleteTodo = ( todoId )=>{
    state.todos = state.todos.filter( todo => todo.id !== todoId);
}

const deleteComplete = ( )=>{
    state.todos = state.todos.filter( todo => todo.done );
}

const setfilter = ( newFilter = Filters.All )=>{
    state.filter = newFilter;
}

const getCurrentFilter = ()=>{
    return state.filter;
}

export default{
    addTodo,
    deleteComplete,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setfilter,
    toggleTodo,
    getTodos,
}