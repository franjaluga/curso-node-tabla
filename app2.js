// imprimir la tabla de lo que ingrese el usuario
const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar2');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log (argv);
console.log ('base: yargs', argv.b);


crearArchivo ( argv.b, argv.l, argv.h )
     .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
     .catch( err => console.log(err));
