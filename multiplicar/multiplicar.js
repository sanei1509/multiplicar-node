// requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express') => PACKETE EXTERNO NECESARIO INSTALARLO ANTES DE USAR
// cons fs = require('../nuestroarchivo'); => creado por nosotros

 let listarTabla = (base, limite = 10) => {
    
    console.log('===================================='.red);
    console.log(`=======tabla del ${ base } ========`.blue);
    console.log('===================================='.red);

    for(let i = 1; i<=limite; i++ ){
        res = base * i;
        console.log(`${base}*${i} = ${res}\n`);
    }
 }

 let crearArchivo = ( base, limite = 10 ) =>{

    return new Promise((resolve, reject) =>{
        
        if(!Number(base)){
            reject(`el valor ingresado "${base}" no es un número`);
            return;
        }
        
        let data = '';

        // 2 * 1 = 2
        // 2 * 2 = 4
        // 2 * 3 = 6
        // 2 * 4 = 8
        // 2 * 5 = 10 

        

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
        
            if (err)
                 reject(err)
            else
                resolve(`archvo tabla-${base}.txt`);
        
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
    //esta opción es bastante buena ya que solo iríamos agregando otros bloques para exportar aqui.
}

