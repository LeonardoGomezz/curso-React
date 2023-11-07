const nombre = 'leonardo';
const apellido = 'gomez';

// const nombreCompleto = nombre + ' '+ apellido;

const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}`;

console.log(nombreCompleto);

function getSaludo( nombre ){
  return` hola ${nombre}`;
};

console.log( `este es un texto: ${getSaludo(nombre)} ` )