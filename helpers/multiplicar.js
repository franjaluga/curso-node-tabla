const fs = require('fs');

const crearArchivo = ( base ) =>{

    return new Promise((resolve,reject) =>{
        console.log('==============');
        console.log('Tabla del: '+base);
        console.log('==============');
    
        let salida = '';
    
        for(let i=0; i<=10;i++){
            j = base *i;
            salida += `${base} x ${i} = ${j}\n`;
        }
        console.log(salida);
    
    
        fs.writeFileSync(`tabla-del-${base}.txt`, salida );
        resolve(`tabla de la base ${base} creada`);
 
    })

}

module.exports = {
    crearArchivo
}