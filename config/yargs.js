const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption:true,
                    describe: 'es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption:true,
                    default: false,
                    describe: 'Muestra la tabla de ese número'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption:true,
                    describe: 'es el límite hasta donde debe multiplicar'
                })        
                .check( (argv, options) => {
                    if ( isNaN( argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;