//En un formulario web pides al usuario su nombre completo y quieres
// asegurarte de que no haya espacios al inicio o final, y además quieres
// mostrar cuántos caracteres tiene el nombre sin contar los espacios.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Ingres su nombre completo"), (nombre)=>
    {
    const nombreLimpio = nombre.trin();
    const nombreSinEspacios = nombre.replaveAll(" ","");
    const numCaract = nombreSinEspacios.length();

    console.log(`Nombre limpio: ${nombreLimpio}`);
    console.log(`Nombre sin espacios: ${nombreSinEspacios}`);
    console.log(`Cantidad de caracteres sin espacios: ${numCaract}`);
    
    rl.close();
}
