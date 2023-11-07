

// Funciones en JS
// const saludar = function (nombre){
//     return`hola, ${nombre}`;
// }

const saludar2 = (nombre) =>{
    return`Hola, ${nombre}`
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `hola mundo`;

const getUser = () =>({
        uid: 'ABC123',
        username: 'El_papi1502'
})


console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());
console.log(getUser());

//tarea 
//1. transformar a funcion de flecha 
//2. tiene que retornar un objeto implicito
//3. pruebas
function getUsuarioActivo(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Leonardo');

//solucion

const getUsuarioActivo2 = (nombre) =>({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Leonardo')

console.log(usuarioActivo);
console.log(usuarioActivo2);