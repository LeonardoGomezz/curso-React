const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 43,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};


const persona2 = { ...persona };

console.log(persona);
console.log(persona2);