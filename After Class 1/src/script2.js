// Declaracion
let mensaje = "Bienvenido";
const PI = 3.14159265359;

// Inicializacion
let mensaje2 = "El siguiente programa calculara el perimetro de un criculo.";

alert(mensaje);
alert(mensaje2);

//Entrada de datos
// Prompt siempre retonra un string.
let radio = parseFloat(prompt("Ingrese un radio (numerico decimal)"));

// Validacion
//(veremos luego como)

console.log(" radio vale:");
console.log((radio));


// Procesamiento
const resultado = PI * Math.pow(radio, 2);


// Salida
alert(`El resultado de la operacion es: ${resultado}`);