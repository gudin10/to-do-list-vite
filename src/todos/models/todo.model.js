import {v4 as uuid} from 'uuid';

class Todo{
    /**
     * @param {String} description
     */
    constructor( description ){
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createAt = new Date();
    }
}

export {
    Todo
};