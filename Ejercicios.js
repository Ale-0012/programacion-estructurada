//Declara un objeto animal, con las propiedades raza, tamaño y color
//muestra el objeto en consola y luego imprime cada propiedad por separado.
const animal ={
    raza: "Pastor Aleman",
    tamanio: 2.04,
    color: "negro"
}
console.log(animal)

console.log(animal.raza)
console.log(animal.tamanio)
console.log(animal.color)

//Al objeto animal agrega una nueva propiedad (la que desees) imprímela en consola
//y luego elimina la propiedad raza
animal.estaSano = "Si"
console.log(animal)

delete animal.raza
console.log("Se elimino la propiedad raza", animal)

//Crea un objeto usuario con las propiedades usuario, email y rol, usa destructuring
//para crear variables con esas propiedades y mostrarlas en consola. 
const usuario = {
    nomUsuario: "Alexa00",
    email: "@gmail.com",
    rol: "Empleado"
}
const{nomUsuario, email, rol} = usuario
console.log(nomUsuario)
console.log(email)
console.log(rol)