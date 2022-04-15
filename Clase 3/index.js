/* 
for(desde; hasta; actualizacion){
  lo que vamos a repetir
}
*/
// i = i + 1
/* for(let i = 20; i < 100; i = i + 2){
  console.log(i);
} */

/* for(let i = 0; i < 3; i++){
  alert("Hola Coder");
} */

/* let ingresarNumero = parseInt(prompt("Ingrese un numero"));

for(let i = 0; i <= 10; i++){
  let resultado = ingresarNumero * i;
  alert(ingresarNumero + " X " + i + " = " + resultado);
} */

/* for(let i = 1; i <= 20; i++){
  let nombre = prompt("Ingresar nombre");

  alert("Su turno es Numero " + i + " Nombre: " + nombre);
} */

/* for(let i = 0; i < 5; i++){
  console.log("iniciamos" + i);

  if(i === 2){
    console.log("entramos al if");
    break;
  }

  console.log("terminamos");
}

console.log("terminamos el proceso"); */


/* for(let i = 0; i < 20; i++){

  if(i === 3){
    continue;
  }

  if(i == 4){
    break;
  }

  console.log("terminamos " + i);
} */

/* 
while(condicion){
  codigo que se ejecuta mientras la condicion sea verdadera
}
*/

/* let repetir = true;

while(repetir){
  console.log("Hola");
} */
/* let nombre = prompt("Ingrese el nombre");
let contrasena = prompt("Ingrese la contrasena"); */

/* while(contrasena != "1234"){
  alert("contrasena incorrecta");

  contrasena = prompt("Ingresar un dato");
} */

/* let repetir = false;

do{
  console.log("hola");
}while(repetir) */

/* while(repetir){
  console.log("hola");
} */

/* let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero)); */

/* 
switch(dato){
  case value1:
    codigo;
    break;
  
  case value2:
    codigo;
    break;

  default:
    codigo;
    break;
}
*/

/* let nombre = "andres";

switch(nombre){
  case "andres":
    console.log("ingresaste andres");
    break;

  case "anita":
    console.log("ingresaste anita");
    break;

  default:
    console.log("No ingresaste ninguno");
    break;
} */
let i = 10;

while(i != 20){
  console.log("andamos");
  i++;
}

console.log("continuamos el proceso");