/* 
estructura de los objetos
{clave1: valor1, clave2: valor2, ...};
*/
// let persona = {nombre: "andres", edad: 20, direccion: "cra 32"}
/* let persona = {
  nombre: "andres",
  edad: 20,
  direccion: "cra 32"
}; */

/* let variable = "nombre";

console.log(persona.variable);
console.log(persona.edad);
console.log(persona.direccion);
console.log(persona[variable]);
console.log(persona["edad"]);
console.log(persona["direccion"]); */

/* persona["nombre"] = "manuela";
persona.edad = 25;
persona.estudiante = true;
persona["ubicacion"] = "Avenida";

console.log(persona); */


/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.oficina = 12;
}

const persona1 = new Persona("andres", 20, "avenida");
const persona2 = new Persona("marina", 22, "ferrocarril");
const persona3 = new Persona("marinaaaaa", 221, "ferrocarril1");

console.log(`su nombre es ${persona2.nombre} y su edad es ${persona2.edad}`); */

/* console.log("Rosa".length);
console.log("Rosa".toLowerCase());
console.log("Rosa".length); */

/* function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}

const persona1 = new Persona("andres", 15, "cra32");
console.log(persona1.hablar()); */

/* const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
//console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
//console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
} */

/* function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
} */

/* class Persona{
  constructor(nombre, edad, calle) {
      this.nombre = nombre;
      this.edad   = edad;
      this.calle  = calle;
  }

  hablar(){
    console.log("HOLA SOY "+ this.nombre);
  }
}

const persona1 = new Persona("a", 1, "cra"); */

/* class Producto {
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new Producto("Pan", 1200);
const producto2 = new Producto("Cafe", 1300);

console.log(producto1.a()); */

/* console.log(producto1.vendido);
producto1.vender();
console.log(producto1.vendido);
console.log(producto2.vendido);
 */

class Perritos{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.patas = 4;
  }

  correr(){
    console.log("estoy corriendo");
  }

  ladrar(){
    console.log(this.nombre + " esta ladrando");
  }
}

const perrito1 = new Perritos("sparki", 3);
const perrito2 = new Perritos("benedetto", 4);

console.log(perrito1.nombre);
perrito1.correr();
perrito1.ladrar();