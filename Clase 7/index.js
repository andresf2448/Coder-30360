/* function mayorQue(n) {
  return (m) => m > n;
}

let mayorQueOnce = mayorQue(11);
console.log(mayorQueOnce(4));

let mayorQueDiez = (m) => m > 10; */

/* function asignarOperacion(op) {
  if (op == "sumar") {
      return (a, b) => a + b;
  } else if (op == "restar") {
      return (a, b) => a - b;
  }
}

let suma = asignarOperacion("sumar");
console.log(suma(3,4));

let resta = asignarOperacion("restar");
console.log(resta(4,2)); */
/* let total = 0

function acumular(num) {
    total += num
}

function porCadaUno(arr, fn) {
  for (const el of arr) {
      fn(el);
  }
}

porCadaUno([1,2,3,4,5], acumular);
console.log(total); */

/* const duplicado = [];

function porCadaUno(arr, fn) {
  for (const el of arr) {
      fn(el);
  }
}

porCadaUno([1,2,3,4,5,6], (el)=> {
  duplicado.push(el * 2)
})

console.log(duplicado); */

/* //el foreach recorre cada uno de los elementos de un arreglo y realiza una operacion con ellos
const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((elem) => {
  console.log(elem);
}) */

//find encuentra un elemento dentro de un arreglo
/* let curso = prompt("ingrese el nombre del curso");
const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
];

const result = cursos.find((elem) => elem.nombre === curso);
console.log(result); */

/* const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
  {nombre: 'AngularJS', precio: 22000},
  {nombre: 'Desarrollo Web', precio: 16000},
];

const resultado = cursos.filter(elem => elem.precio < 20000);
console.log(resultado); */

const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
  {nombre: 'AngularJS', precio: 22000},
  {nombre: 'Desarrollo Web', precio: 16000},
];

//console.log(cursos.some((elem) => elem.nombre === 'Desarrollo Web'));
/* const nombres = cursos.map(elem => elem.nombre);
console.log(nombres); */

/* const cursosActualizados = cursos.map(elem => {
  return {
    nombre: elem.nombre,
    precio: elem.precio + 100
  }
})

console.log(cursosActualizados); */

/* const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);

console.log(total) */

/* const miCompra = [
  { nombre: 'Desarrollo Web', precio: 20000 },
  { nombre: 'Javascript', precio: 18750 },
  { nombre: 'ReactJS', precio: 27500 }
]

const total = miCompra.reduce((acum, el) => acum + el.precio, 0);
console.log(total); */

/* const numeros = [ 40, 1, 5, 200 ];
console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a)); */

/* const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
]

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
  })
);

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
    // a es igual a b
    return 0;
  })
); */

/* console.log(Math.PI);
console.log(Math.E); */

/* console.log( Math.max(55, 13, 0, -25, 93, 4, Infinity) );
console.log( Math.min(55, 13, 0, -25, 93, 4, -Infinity) ); */

/* const pi = Math.PI;

console.log(pi);
console.log(Math.ceil(pi));
console.log(Math.floor(pi));
console.log(Math.round(pi)); */

//console.log(Math.sqrt(9));
/* console.log( Math.random() );
console.log( Math.random() * 10); */

/* const generadorNumero = () => {
  return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() ) */

//console.log( Date() )
//console.log(new Date(2020, 1, 15))
/* const casiNavidad = new Date(2021, 11, 24, 23, 59, 59)
console.log(casiNavidad);
console.log(casiNavidad.toString()); */

/* const casiNavidad = new Date("December 24, 2021 23:59:59")
console.log(casiNavidad.toString()) */

/* const hoy = new Date("December 17, 2021")
console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay()); */

/* const hoy = new Date("December 17, 2021");
console.log( hoy.toDateString() );
console.log( hoy.toLocaleString() );
console.log( hoy.toLocaleDateString() );
console.log( hoy.toTimeString() ); */

/* const navidad = new Date("December 25, 2021")
const hoy = new Date("December 17, 2021")

console.log( navidad - hoy )

const milisegundosPorDia = 86400000;

console.log( (navidad - hoy ) / milisegundosPorDia); */
const inicio = new Date();

for(let i=0; i < 1000; i++){
  console.log("veces", i);
}

const final = new Date();

console.log("el tiempo de duracion es: ", final - inicio);