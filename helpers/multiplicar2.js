const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, listar = false, hasta = 10) =>{

    return new Promise((resolve,reject) =>{
       
        if ( listar){
            console.log('=============='.green);
            console.log('Tabla del: '+base);
            console.log('=============='.green);
        }
        
        let salida = '';
    
        for(let i=0; i<= hasta;i++){
            j = base *i;
            salida += `${base} x ${i} = ${j}\n`;
        }

        if ( listar){
            console.log('==============');
            console.log('Tabla del: '+base);
            console.log('==============');
            console.log(salida);
        }
    
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida );
        resolve(`tabla de la base ${base} creada`);
 
    })

}

module.exports = {
    crearArchivo
}