import { getHeroesById } from './08-imp-exp';


// const promesa = new Promise((resolve, reject) =>{
//     setTimeout( () =>{
//         const heroe = getHeroesById(8);
//         resolve(heroe);
//     }, 2000)
// });

// promesa.then( (heroe) =>{
//     console.log('Heroe:', heroe);
// })
// .catch( err => console.log(err));

const getHeroesByIdAsync = ( id ) =>{
    return new Promise((resolve, reject) =>{
        setTimeout( () =>{
            const heroe = getHeroesById(id);
           if(heroe){
            resolve(heroe);
           }else{
            reject('El heroe que intentas buscar no existe');
           }
        }, 2000)
    });
}

getHeroesByIdAsync(1)
.then( console.log)
.catch(console.log)