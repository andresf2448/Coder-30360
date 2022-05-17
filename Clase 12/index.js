/* let num = 20;
num = num + 1;
num += 1;
num++; */
/* 
let edad = 10; */
/*
if(edad > 25){
  alert("es mayor a 25");
}else{
  alert("es menor a 25");
} 

operador ternario
condicion ? verdadero : falso;


edad > 25 ? alert("es mayor a 25") : alert("es menor a 25"); */

/* let permiso = edad >= 18 ? true : false;
console.log(permiso); */

/* const usuario = {
  nombre: "Andres",
  edad: 18
};

const permiso = (usuario.edad >= 18 && usuario.nombre === "Andres") ? true : false;
console.log(permiso); */

/* const productos = [];

if(productos.length === 0){
  console.log("Los productos están vacios");
}

productos.length === 0 && console.log("Los productos estan vacios"); */
/* 
operador1 && operador2
si operador1 es verdadero entonces retorna el operador 2

let nombre = "andres";
const valor = nombre != "andres" && true
console.log(valor); */

/* 
operador1 || operador2
operador1 no es falsy (no es 0, null, undefined, NaN, false o string vacio) retorna operador1
de lo contrario retorna operador2
*/

/* console.log( 0 || "Falsy")
console.log( 40 || "Falsy");
console.log( null || "Falsy") // falsy
console.log( undefined || "Falsy")  // falsy
console.log( "Hola Mundo" || "Falsy")  // hola mundo
console.log( "" || "Falsy")  //falsy
console.log( NaN || "Falsy") // falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy") //falsy */

/* const producto = {
  precio: "1000",
  nombre: "pan"
};

console.log(producto || "No hay un producto"); */

/* let carrito;

let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )

if (carritoLocalStorage) {
  carrito = carritoLocalStorage;
} else {
  carrito = [];
}
 */
/* const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito); */

/* 
nullish coalescing
*/

/* console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false */

/* const usuario = {
  nombre: null,
  familiar: {
    nombre: "maria"
  }
};

console.log(usuario?.nombre || "no existe"); */
/* console.log(usuario?.familiar?.nombre || "No existe"); */

/* const usuario = {
  nombre: "Jaime",
  familiar: {
    nombreFamiliar: "maria"
  }
};

const {familiar: {nombreFamiliar}, nombre} = usuario;

console.log(nombre);
console.log(nombreFamiliar); */

/* const usuario = {
  nombre: "Jaime",
  nombreFamiliar: "maria"
};

const { 
  nombre: namePerson, 
  nombreFamiliar: mother
} = usuario;

console.log(namePersona);
console.log(mother); */

/* function getUser({nombre, apellido}) {
  console.log(nombre);
  console.log(apellido);
}

let usuario = {
  nombre: "Jaime",
  apellido: "Ruiz"
};

getUser(usuario); */

/* window.addEventListener('click', ({x, y}) => {
  console.log(x, y);
}) */

/* const productos = ["Pan", "Harina", "Leche"];
const [, prod2, prod3] = productos;

console.log(prod2);
console.log(prod3); */

/* const productos = ["Pan", "Harina", "Leche"];
console.log(...productos);
console.log(productos.join(" ")); */
/* let numeros= [1,2,3,4,6,4,3,2,90];
console.log(Math.max(...numeros)); */

/* const producto1 = {
  precio: 1000,
  nombre: "Pan"
};

let producto2 = {
  ...producto1,
  precio: 1100,
  peso: 5
};

console.log(producto2); */

/* function numeros(...numeros){
  console.log(numeros);
}

numeros(1,3,2,90); */

function sumar(...numeritos) {
  return numeritos.reduce((acc, n) => acc + n, 0)
}

console.log(sumar(1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2));