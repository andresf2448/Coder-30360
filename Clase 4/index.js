/* 
function nombre(par1, par2, ...){
  codigo a realizar
}
*/

/* function saludar(){
  console.log("Bienvenido");
}

saludar(); */
/* function saludar(name){
  let saludo = `Bienvenido/a ${name}`;

  alert(saludo);
}

let nombre = prompt("Ingresa tu nombre");
saludar(nombre); */

/* function solicitarNombre(){
  let nombreIngresado = prompt("Ingresar nombre")
  alert("El nombre ingresado es " + nombreIngresado)
}


solicitarNombre(); */

/* function saludar(nombre, apellido, saludo="Bienvenid@"){
  console.log(`${saludo} ${nombre}`);
}

let nombre = "andres";
let apellido = "duque";
saludar(nombre, "hola"); */

/* function suma(x,y){
  return x + y;
}

let resultado = suma(1,2);

console.log("este es el resultado ", resultado); */

/* function calculadora(num1, operacion, num2){
  switch(operacion){
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "operacion no definida";
  }
}
let operador = opr1;
let resultado = calculadora(10, operador, 2);
console.log("El resultado de la operacion es: ", resultado); */

/* function saludar(){
  console.log("primero");
  return 1;
  console.log("segundo");
}
saludar(); */

/* function enviar(){
  // enviamos a la empresa

  return "exito";
}

enviar() */
/* let reconocida = 4;

function saludo(){
  let saludoBienvenida = "Hola";
  console.log(reconocida);
}

saludo()
//console.log(saludoBienvenida);
console.log(reconocida); */

/* function sumar(num1, num2) {
  let resultado = num1 + num2
  return resultado
}

function restar(num1, num2) {
  let resultado = num1 - num2
  return resultado
} */

/* const suma = function(a, b){ 
  return a + b;
}

const resta = function(a, b){ return a - b; }

console.log(suma(3,4));
console.log(resta(3,4)); */

/* const suma = (a, b) => a + b;
const resta = (a, b) => {  return a - b };

console.log(suma(3,4));
console.log(resta(3,4)); */

/* const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
let nuevoPrecio = resta(suma(500, iva(500)), 50)
let nuevoPrecio = resta(suma(500, 10), 50)
let nuevoPrecio = resta(510, 50)
let nuevoPrecio = 460;


console.log(nuevoPrecio); */

function suma(a,b){
  return a + b;
}

const suma = (a,b) => a - b;