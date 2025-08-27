// const nombre ="Eli";
// const edad = 20;
// const altura = 1.50;

//Creacion de objetos
const persona = {
     nombre: "Eli",
     edad: 20,
     altura: 1.50
}
console.log(persona)

//ACCEDER A LAS PROPIEDADES DEL OBJETO
//Acceso por punto
console.log(persona.nombre)

//Acceder a las propiedades por corchete
console.log(persona['edad'])

//Agregar mas propiedades al objeto
persona.nacionalidad = "Hondureña";
console.log(persona)

//Eliminar propiedades del objeto
delete persona.nacionalidad
console.log("Propiedad limpia:", persona)

//Modificar el valor de una propiedad
persona.altura = 1.60;
console.log("Se modifico la edad", persona)

//Asignar el valor de la propiedad del objeto a una varible
const nom = persona.nombre
console.log(nom);

//Destructuring: crea la variable y almacena su valor
// const {nombre} = persona; 
// console.log(nombre);

// //Reasignando una nueva variable
// const {edad} = persona;
// console.log(edad)

// const {nombre, edad} = persona;
// console.log(edad);
