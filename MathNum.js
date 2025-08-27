import { match } from 'assert';
import readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//1.	Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada.
rl.question("Ingrese un numero: ", (num)=>{
    console.log(`La raiz del numero ingresado es: ${Math.sqrt(num)}`)
    console.log(`La potencia del numero al cuadrado es de: ${Math.pow(num, 2)}`)


//2.Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 
// para asignar un premio.
rl.question("Ingresa un numero que este entre 0 y 29: ", (numSorteo)=>{
    let ganador = Math.floor(Math.random()* 30) + 1;
    console.log(`El numero ganador es: ${ganador}`)


//3.	Una tienda de electrodomésticos necesita encontrar el precio más barato y el
//  más caro de su lista de precios: [30, 52, 35, 1, 12, -3].
    console.log(`El precio mas caro de la lista es: ${Math.max(30, 52, 35, 1, 12, -3)}`)
    console.log(`El precio mas barato de la lista es: ${Math.min(30, 52, 35, 1, 12, -3)}`)

//4.	Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de 
// habitaciones en el que se encuentra (ejemplo: habitación 25). El programa debe calcular 
// y mostrar en qué piso está. Deberá pedir el número de la habitación, dividir el número de 
// habitaciones entre 10 y redondear hacia arriba y mostrar el piso correspondiente.

rl.question("Ingresa el numero de tu habitacion: ", (numHabitacion)=>{
    let dividir = parseInt(numHabitacion) / 10
    let piso = Math.ceil(dividir)

    console.log(`El piso que corresponde a tu habitacion es: ${piso}`)

    rl.close()
})
    
})

})