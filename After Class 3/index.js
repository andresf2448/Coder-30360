/* let personas = [
  {nombre: "Carolina", edad: 20},
  {nombre: "Carolina1", edad: 21},
  {nombre: "Carolina2", edad: 22},
];

let eleccion = personas.find(x => x.nombre === "Carolina1");
let totalEdad = personas.reduce((accum, elem) => accum + elem.edad , 0);
console.log(totalEdad); */

//alert(eleccion.nombre)

/* let personas = [
  {nombre: "Carolina", edad: 20},
  {nombre: "Carolina1", edad: 21},
  {nombre: "Carolina2", edad: 22},
];

let eleccion = personas.find(x => x.nombre === "Carolina1");
let nombresUnidos = personas.reduce((accum, elem) => accum + " " + elem.nombre , "");
console.log(nombresUnidos);

alert(nombresUnidos);

let nombres = ""

for (let index = 0; index < array.length; index++) {
  nombres += array[index];
}

alert(nombres) */

/* function elecciones(seleccion){
  if(seleccion.includes("pan")){
    return () => productosPanes.find(x => x.nombre === seleccion);
  }else{
    return () => productosArroz.find(x => x.nombre === seleccion);
  }
}

let productosArroz = [
  {nombre: "arroz", precio: 20},
  {nombre: "arroz1", precio: 21},
  {nombre: "arroz2", precio: 22},
];

let productosPanes = [
  {nombre: "pan", precio: 20},
  {nombre: "pan1", precio: 21},
  {nombre: "pan2", precio: 22},
];

let arroz = prompt("Ingrese el arroz");
let arrozEleccion = elecciones(arroz);
let arrozEncontrado = arrozEleccion();

let pan = prompt("Ingrese el pan");
let panEleccion = elecciones(pan);
let panEncontrado = panEleccion();

console.log(panEncontrado.precio + arrozEncontrado.precio); */

/* let arrozSeleccionado = productosArroz.find(x => x.nombre === arroz);
let panSeleccionado = productosPanes.find(x => x.nombre === pan);

let resultado = `el precio de los productos es ${arrozSeleccionado.precio + panSeleccionado.precio}`;

alert(resultado); */
let productosPanes = [
  {nombre: "pan", precio: 20},
  {nombre: "pan1", precio: 21},
  {nombre: "pan2", precio: 22},
];

function operaciones(operacion){
  if(operacion === "encontrar"){
    return (producto) => productosPanes.find(x => x.nombre === producto)
  }
  
  if(operacion === "filtrar"){
    return (precio) => productosPanes.filter(x => x.precio > precio);
  }
}

let buscar = operaciones("encontrar");
let resultado = buscar("pan2");

let mostrar = `el producto es ${resultado.nombre} y su precio es ${resultado.precio}`
alert(mostrar)
/* let filtro = operaciones("filtrar");
console.log(filtro(20)); */