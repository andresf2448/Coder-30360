/* console.dir(document);
console.dir(document.body) */

/* let div = document.getElementById("aplicacion");
console.log(div.innerHTML);

let saludo = document.getElementById("saludo");
console.log(saludo.innerText);
console.log(saludo.innerHTML); */

/* let perritos = document.getElementsByClassName("perritos");

console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
  alert(perrito.innerHTML);
} */

/* let saludo = document.getElementById("saludo");

saludo.innerHTML = "<h1>Hola Coder</h1>";
 */
/* let respuesta = prompt("ingrese si o no para cambiar color");

let saludo = document.getElementById("saludo");

if(respuesta === "si"){
  saludo.className = "color";
} */


/* 
  1. crear la etiqueta
  2. agregamos el contenido a la etiqueta
  3. ubicar la etiqueta en mi html
*/
/* let mensaje = prompt("diga si quiere que se vea el nombre")

let nombre = document.createElement("p");
nombre.innerText = "Juanita";
document.body.append(nombre); */

/* let saludo = document.getElementById("saludo");
saludo.remove(); */

/* document.getElementById("nombre").value = "casa";
console.log(document.getElementById("nombre").value); */

/* let personas = ["jaime", "andres", "pepito", "agostina"];
let padre = document.getElementById("padre");

for(const persona of personas){
  let li = document.createElement("li");
  li.innerHTML = persona;
  padre.append(li);
} */

/* let productos = ["Arroz", "Pan", "Cafe", "Leche"];
let padre = document.getElementById("productos");

for(const producto of productos){
  let li = document.createElement("li");
  li.innerHTML = producto;
  padre.append(li);
} */

/* let persona = {nombre: "andrea", edad: 19, direccion: "Argentina"};

let informacion = `nombre: ${persona.nombre}, edad: ${persona.edad}, direccion: ${persona.direccion}`;

console.log(informacion); */

/* const productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];

for (const producto of productos) {
  let contenedor = document.createElement("div");
  //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
  document.body.append(contenedor);
} */

/* let saludo = document.querySelector("#divGrande p");
console.log(saludo); */

/* let p = document.querySelector(".saludo");
console.log(p);

let parrafos = document.querySelectorAll(".saludo");
console.log(parrafos); */

/* let productos = [
  {disponible: true},
  {disponible: false},
  {}
]

let productosDisponibles = [
  {disponible: true},
  {disponible: true},
]

let productosNoDisponibles = [
  {disponible: false},
  {disponible: false},
]

if(respuesta === "dispo"){
  for
} */

let htmlCollection = document.getElementsByTagName("body")
let body = htmlCollection[0];
body.className = "color"
