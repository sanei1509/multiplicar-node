const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch(comando){

    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base)
    .then( archivo => console.log(`archivo ${ archivo } creado !!` ))
    .catch( (error)=>{
        console.log(error);
    })
    break;

    default:
        console.log('comando no reconocido');

}




// console.log(process.argv);
// let argv2 = process.argv;

// console.log('Limite',argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];


  


