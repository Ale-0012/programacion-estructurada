//Un sistema de gestion de pedidps recibe códigos de segumiento en el formato: PED-2025-00045, Se necesita extraer el año del pedido y el número de orden usando el metodo substring().
////1. Extraer el año del pedido (2025) y el número de orden 00045 usando substring.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Ingrese el codigo del pedido (ej: PED-2025-00045)",(codigo)=>
{
    const anio = codigo.substring(4,8);
    const numeroOrden = codigo.substring(9)

    console.log(`Anio del pedido: ${anio}`)
    console.log(`Numero de orden: ${numeroOrden}`)
    rl.close();
})