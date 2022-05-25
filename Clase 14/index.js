/* console.log("comienza");

setTimeout(() => {
  console.log("intermedio");
}, 2000)

console.log("final"); */

/* const boton = document.querySelector('#boton');
const mensaje = document.querySelector('#mensaje');

boton.addEventListener('click', () => {
  mensaje.classList.add('mensaje');

  setTimeout(() => {
    mensaje.classList.remove('mensaje')
  }, 2000);

  console.log("terminamos");
}) */

/* for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra)
  }, 1000)

  console.log("##################");
}

for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra)
  }, 6000)
  console.log("-------------------");
} */

/* console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 0)

console.log("Fin proceso") */

/* setInterval(() => {
  console.log("se repite");
}, 1000);

console.log("hola"); */

/* let counter = 0;

const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval);
        console.log("Se removió el intervalo");
    }
}, 1000) */

/* console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 2000)

clearTimeout(fin) */

/* new Promise((resolve, reject) => {
  //codigo de la promesa
});
 */

const eventoFuturo = (status) => {
  return new Promise( (resolve, reject) => {
      //cuerpo de la promesa
      status ? resolve("exito") : reject("fallo");
  } )
}

eventoFuturo(true)
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  //cerramos o finalizamos la conexion con la base de datos
})