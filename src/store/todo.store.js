import { Todo } from "../todos/models/todo.model";

const Filters = {
    All : 'all',
    completed : 'Completed',
    Pending : 'Pending',
}
const state = {
    todos : [
        new Todo('Peidra del alma'),
        new Todo('Peidra ancha'),
        new Todo('Peidra tieme'),
    ],
    filter : Filters.All
}

const initStore = ()=>{
    console.log(state);
    console.log('Initstore :3')
}

export default{
    initStore,
}