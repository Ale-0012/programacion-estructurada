const numeros = [10, 20, 30, 40, 50]

const meses = new Array ('Enero', 'Febrero', 'Marzo');

const deTodo = ['Hola', 10, null, true, {nombre: 'juan', trabajo: 'Programador'},[1,2,3]]

console.table(deTodo)
console.log(deTodo[3])
console.log(deTodo[4].nombre)
console.log(deTodo[5][1])

//Modificar un array
numeros[1]=80;
console.table(numeros)

meses.push('Abril')
console.log(meses)

meses.pop();
console.log(meses)

meses.shift();
console.log(meses)

meses.unshift('Enero')
console.log(meses)

for(i=0; i<meses.length; i++){
    console.log(meses[i])
}

numeros.splice(2, 0, 100)
console.log(numeros)

//Imprimir el primer y ultimo dia de la semana
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let primer = dias[0];
let ultimo = dias[dias.length -1];

console.log(primer, ultimo)

