// de un código generado automáticamente solo se requiere mostrar los últimos 4 caracteres

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Ingrese un condigomgenerado"), (codigo)=>{
    const ultimosDigitos = codigo.slice(-4);

    console.log(`Los ultimos 4 digitos del codigo son: ${ultimosDigitos}`);
    rl.close()
}