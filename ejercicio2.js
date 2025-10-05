// 2. Solicitar al usuario tres números y calcula el promedio
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let numeros = []

rl.question("Ingresa la primer nota: ", (nota1)=>{
    numeros[0] = parseFloat(nota1)
    
    rl.question("Ingresa la segunda nota: ", (nota2)=>{
        numeros[1] = parseFloat(nota2)

        rl.question("Ingresa la tercera nota: ", (nota3)=>{
            numeros[2] = parseFloat(nota3)

            let promedio = (numeros[0] + numeros[1] + numeros[2])/3

            console.log(" Los numeros son: ", numeros)
            console.log("El promedio de los numeros es: ", promedio)
            rl.close()
        })
    })
})