import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el precio unitario del producto: ', (precioUnitario) => {
    rl.question('Ingrese la cantidad de productos comprados: ', (cantidad) => {
        precioUnitario = parseFloat(precioUnitario);
        cantidad = parseInt(cantidad);
        let costoTotal = precioUnitario * cantidad;
        console.log(`El costo total a pagar son: ${costoTotal} dolares`);
        rl.close();
    });
});