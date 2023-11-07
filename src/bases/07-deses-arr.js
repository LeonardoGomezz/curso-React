

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [,,p3] = personajes;
console.log(p3);


// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const retornaArreglo = () =>{
    return['ABC', 123];
}
const [letras, numeros] = retornaArreglo();

console.log(numeros,letras);

//tarea
//1. el primer valos de llamara nombre
//2. se llamara setNombre

// const usestate = (valor) =>{
//     return[valor, () =>{console.log('Hola mundo')}];
// }

// const arr = usestate('Goku');

// console.log(arr);

// solucion

const usestate = (valor) =>{
    return[valor, () =>{console.log('Hola mundo')}];
}

const [nombre, setNombre] = usestate('Goku');

console.log(nombre);
setNombre();
