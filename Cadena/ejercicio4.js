//Un programador quiere saber en qué parte de su mensaje aparece la palabra error
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Ingrese un mensaje"), (error)=>{
    const mensajeError = error.indexOf("error");

    console.log(`La palabra error esta en la posicion: ${mensajeError}}`);
    rl.close()
}