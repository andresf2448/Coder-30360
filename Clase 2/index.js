/* 
estructura del condicional if
if(condicion){
  operaciones a realizar
}
*/
/* let verdad = true;
let falsedad = false;

if(falsedad){
  console.log("verdadero");
}

console.log("final"); */

/* if(3 == 4 || 1 == 1){
  console.log("entramos");
} */

/* 
=== evalua tanto tipo como valor
== solo evalua el valor
*/

/* console.log("3" == 3);
console.log("3" === 3); */

/* console.log(3 != 4); */
/* let nombre = "andres";

if(4 < 3){
  console.log("es menor");
  console.log("hola");
}

if(5 === 5){
  console.log("si es igual a 5");
}

console.log("final"); */
/* let numero = 5;


if(numero == 4){
  console.log("son iguales");
}else{
  console.log("no son iguales");
}

console.log("final"); */

/* let respuesta = prompt("Ingresar un numero");

if(respuesta == "5"){
  alert("la entrada es 5");
}else{
  alert("la entrada no es igual a 5");
} */

/* let precio = 100;

if (precio < 20) {
    console.log("El precio es menor que 20");
}else if (precio < 50) {
    console.log("El precio es menor que 50");
}else if (precio <= 100) {
    console.log("El precio es menor que 100");
}else {
    console.log("El precio es mayor o igual que 100");
} */

/* let valor = 4 > 5;
console.log(valor); */

/* let nombre = prompt("Ingresa un nombre");

if(nombre != ""){
  if(nombre === "andres"){
    alert("ingresaste andres");
  }else if(nombre === "camilo"){
    alert("ingresaste camilo");
  }else{
    alert("no ingresaste ninngun nombre valido");
  }
} */

/* let nombre = prompt("Ingresa un nombre");

if(nombre != ""){
  let mensaje = "Ingresaste el nombre " + nombre;
  alert(mensaje);
}else{
  alert("ingresasste un campo vacio");
} */
/* 
te voy a invitar al desayuno o al almuerzo
*/
/* 
el operador || solo es falso cuando ambas sentencias sean falsas
el operador && solo es falso cuando al menos una sentencia es falsa
*/
/* let valor1 = true || false;
let valor2 = false || false;
let valor3 = true || true;

console.log(valor1);
console.log(valor2);
console.log(valor3);

let valor4 = false && true;
let valor5 = true && true;

console.log(valor4);
console.log(valor5); */

/* let nombre = prompt("ingrese un nombre");
let apellido = prompt("ingresa un apellido");

if(((nombre === "andres") || (nombre === "camila")) && (apellido != "")){
  alert("ingresaste un nombre valido");
}else{
  alert("ingresaste algo incorrecto");
}
 */


/* let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}
 */

let nombre = "Ezequiel";
let apellido = "galardi";

console.log(nombre + " es nuestro coordinador de apellido " + apellido);
console.log(`${nombre} es nuestro coordinador de apellido ${apellido}`);