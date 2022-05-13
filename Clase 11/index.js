/* 
Condicionales
if(){

}else if(){

}else if(){

}else{

}

if(condicion){

} */

/* 
bucles
for, while, do while
for(let i = 0; i < 10; i++){

}

CUIDADO CON LOS BUCLES INFINITOS
let nombre = prompt("ingrese el nombre");
while(nombre != "andres"){
  console.log(nombre);
  nombre = prompt("ingrese el nombre");
}

do{
  codigo a ejecutar
}while(condicion)
*/

/* 
function eliminar(par1, par2, ...){
  codigo a ejecutar

  return "ok";
}

let resultado = eliminar(1,2, ...);

const suma = (a,b) => {return a + b};
*/

/* 

function Productos(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
  this.vender = function() {console.log(this.nombre + " se ha vendido");}
}

class Productos{
  contructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }

  vender(){
    console.log(this.nombre + " se ha vendido");
  }
}

const producto = new Productos("pan", 1000);
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.vender(););
*/

/* 
map, filter, find

*/

const productos = [
  { nombre: "pan", precio: 1000 },
  { nombre: "leche", precio: 1100 },
  { nombre: "cafe", precio: 100 },
];

/* let nombresProducto = productos.map(producto => producto.nombre);
console.log(nombresProducto); */

/* let filtradosPrecio = productos.filter(producto => producto.precio < 1000);
console.log(filtradosPrecio); */

/* let encontrado = productos.find(producto => producto.precio === 100);
console.log(encontrado); */

/* localStorage.setItem("productos", JSON.stringify(productos));
sessionStorage.setItem("productos", JSON.stringify(productos));
JSON.parse(localStorage.getItem("productos"));
JSON.parse(sessionStorage.getItem("productos")); */

//CODIGO JS
/* let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  console.log("Formulario Enviado");
} */


/* 
para registro

*/

/* 
carrito de compras
*/

/* 
home
*/


let a = a();

function suma(num1, num2){
  let resultado = num1 + num2;

  return resultado;
}