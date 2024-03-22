import html from './app.html?raw';
/**
 * @param {String}elemenId  
 */
const App = ( elemenId )=>{
    //fun anonima autoinvoncada
    //cuando la funcion App() se llama.
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elemenId).append( app );
        //console.log('llego');
    })();
}

export{
    App,
};