// Importar el módulo readline
import readline from 'readline';

// Crear la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Realizar la pregunta al usuario
rl.question('Ingrese una frase: ', (frase) => {
    console.log(`\n=== Tratamiento de cadena ===`);

    // 1. length
    const fraseLength = frase.length;
    console.log(`La longitud de la cadena es: ${fraseLength}`);

    // 2. toUpperCase
    const fraseMayusculas = frase.toUpperCase();
    console.log(`Frase en mayúsculas: ${fraseMayusculas}`);

    // 3. toLowerCase
    const fraseMinusculas = frase.toLowerCase();
    console.log(`Frase en minúsculas: ${fraseMinusculas}`);

    // 4. trim
    const fraseTrim = frase.trim();
    console.log(`Frase sin espacios al inicio y final: '${fraseTrim}'`);

    //5. substring - subcadena
    const Subcadena = frase.substring(0, 5);
    console.log(`Subcadena (primeros 5 caracteres) de la frase son: '${Subcadena}'`);

    //6. slice
    const subCadenaSlice = frase.slice(0, 5);
    console.log(`Los primeros 5 caracteres de la frase son: '${subCadenaSlice}'`);

    //* slice con índice negativo
    const subCadenaSliceNegativo = frase.slice(-5);
    console.log(`Los últimos 5 caracteres de la frase son: '${subCadenaSliceNegativo}'`);


    //7. replace
    const fraseReplace = frase.replace('hola', 'adios');
    console.log(`Frase con la primera 'hola' reemplazada por 'adios': ${fraseReplace}`);

    //8. replaceAll
    const fraseReplaceAll = frase.replaceAll('hola', 'adios');
    console.log(`Frase con todas las 'hola' reemplazadas por 'adios': ${fraseReplaceAll}`);

    //9. split divide la frase en palabbras separandolas por un espacio
    const fraseArray = frase.split(' ');
    console.log(`La frase dividida en palabras es: ${fraseArray}`);

    //10. includes
    const contieneHola = frase.includes('hola');
    console.log(`¿La frase contiene 'hola'? ${contieneHola}`);

    //11. indexOf
    const indiceHola = frase.indexOf('hola');
    console.log(`El índice de la primera aparición de 'hola' es: ${indiceHola}`);

    //12. startsWith
    const empiezaConHola = frase.startsWith('hola');
    console.log(`¿La frase empieza con 'hola'? ${empiezaConHola}`);

    //13. endsWith
    const terminaConAdios = frase.endsWith('adios');
    console.log(`¿La frase termina con 'adios'? ${terminaConAdios}`);
    rl.close();
});
