const carrito =[]

const producto1 ={
    nombre: "Camiseta",
    precio: 2.50
}

carrito.push(producto1)
console.log(carrito)

const producto2 ={
    nombre: "Zapatos",
    precio: 2.50
}

carrito.unshift(producto2)
console.log(carrito)

// 1. Solicitar tres nombres al usuario para ser guardados en un array y mostrar luego cada uno
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombres = []

rl.question("Ingres el primer nombre: ", (nombre1)=>{
    nombres.push(nombre1);

    rl.question("Ingrese el segundo nombre: ",(nombre2)=>{
        nombres.push(nombre2);

        rl.question("Ingrese el segundo nombre: ", (nombre3)=>{
            nombres.push(nombre3)

            console.log("Los nombres ingresados son: ");
            console.log("Primer nombre: ", nombres[0])
            console.log("Segundo nombre: ", nombres[1])
            console.log("Tercer nombre: ", nombres[2])

            rl.close()
        })
    })
})
