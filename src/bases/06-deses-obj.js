//Desestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = (usuario) =>{
//     const {nombre, edad, clave} = usuario
//     console.log(nombre);
//     console.log(edad);
//     console.log(clave);
// }

const usecontext = ({nombre, edad, clave, rango = 'capitan'}) =>{
    // console.log(nombre,edad,clave,rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 33.1235,
            lng: 15.2324
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = usecontext(persona);


console.log(nombreClave, anios, lat, lng);
