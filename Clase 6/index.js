/* 
const arr1 = [];
const arr2 = [1,2,3,4,5,6];
const arr3 = ["andres", "geronimo", "Lucas"];
const arr4 = [true, false];
const arr5 = [1, false, "andres", {nombre: "pepito", edad: 5}];
*/

/* const arr3 = ["andres", "geronimo", "Lucas"];
console.log(arr3[1]);

const arr2 = [1,2,3,4,5,6];
console.log(arr2[2] + arr2[4]); */

/* const numeros = [1, 2, 3, 4, 5];

for(let posicion = 0; posicion < 5; posicion++){
  console.log(numeros[posicion]);
} */

/* const numeros = [1, 2, 3, 4, 5, 7, 6, 5, 3, 2];

for (let posicion = 0; posicion < numeros.length; posicion++) {
  console.log(numeros[posicion]);
} */

// el push agrega elementos al final
/* const numeros = [1, 2, 3, 4, 5, 7, 6, 5, 3, 2];
numeros.push("mariana"); */

/* let nombre = prompt("Ingresa un nombre");
numeros.push(nombre) */

//el unshift agrega elementos al principio
/* numeros.unshift(true)
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros); */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(2,2)

console.log(nombres);

console.log(nombres); */

//join me genera un a cadena de texto con todos los elementos del arreglo separados por un string pasado en los parentesis
/* let persona = ["andres", "ruiz"];

console.log(persona.join(" ")); */

/* const perros = ["perrito", "dog"];
const gatos = ["michi"];

const mascotas = gatos.concat(perros);
console.log(mascotas); */

/* const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']; */
/* const copiaNombres = nombres.slice(1, 4);
console.log(copiaNombres);

console.log(nombres.indexOf('Anaaaaaa')); */
/* console.log(nombres.includes('Rita'));

nombres.reverse();
console.log(nombres); */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1,3)

console.log(nombres);

console.log(nombres); */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const copia = nombres.slice(1,3);
console.log(copia);
console.log(nombres); */
/* let aBuscar = "Pedro";
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

for(let i = 0; i < nombres.length; i++){
  if(nombres[i] === aBuscar){
    console.log(i);
    break;
  }

  if(i === nombres.length - 1){
    console.log(-1);
  }
} */

/* const listaNombres = [];

let cantidad = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n")); */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
        console.log(nombres);
    } 
}


console.log(nombres);
let nombreEliminar = prompt("Ingrese el nombre a eliminar");
eliminar(nombreEliminar); */

/* const personas = [
  {nombre: "pepito", edad: 4},
  {nombre: "marinela", edad: 3},
  {nombre: "juan", edad: 2}
];

console.log(personas);
personas.push({nombre: "carolina", edad: 7});
console.log(personas); */

/* const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}
 */

class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }

  mostrarPrecioIva(){
    console.log(this.precio + (this.precio * 0.21));
  }

  vender(){
    this.vendido = true;
  }
}

const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));

console.log(productos[0].vendido);

/* productos[0].vender()
console.log(productos[0].vendido); */
for(const producto of productos){
  producto.mostrarPrecioIva();
}