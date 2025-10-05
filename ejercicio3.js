// 3. Solicita al usuario las temperaturas de tres días y muestra cuál fue la más alta
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let temp = [];

rl.question("Ingresa la primera temperatura: ", (temp1) => {
    temp[0] = parseFloat(temp1);

    rl.question("Ingresa la segunda temperatura: ", (temp2) => {
        temp[1] = parseFloat(temp2);

        rl.question("Ingresa la tercera temperatura: ", (temp3) => {
            temp[2] = parseFloat(temp3); // corregido el índice y parseo

            let max = Math.max(temp[0], temp[1], temp[2]); // Math.max en vez de Match.max

            console.log("Las temperaturas ingresadas son:", temp);
            console.log("La máxima temperatura es:", max);

            rl.close();
        });
    });
});
