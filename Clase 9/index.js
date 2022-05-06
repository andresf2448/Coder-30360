/* function respuestaClick(nombre) {
  console.log("Respuesta evento click", nombre);
}

function respuestaDblClick() {
  console.log("Respuesta evento doble click");
}

let evento = prompt("ingrese el evento");
let boton = document.getElementById("btnPrincipal");

if(evento === "click"){
  boton.addEventListener(evento, () => respuestaClick("andres"));
}

if(evento === "dblclick"){
  boton.addEventListener(evento, respuestaDblClick);
} */
/* let evento = "mousemove";
let boton = document.getElementById("principal");

boton.addEventListener(evento, () => {
  console.log("click con " + evento);
}) */

/* let boton = document.getElementById("principal");

boton.addEventListener("mousedown", () => {
  console.log("click con mousedown");
  boton.className = "";
})

boton.addEventListener("mouseup", () => {
  console.log("click con mouseup");
})

boton.addEventListener("click", () => {
  console.log("click con click");
}) */

/* let apellido = document.getElementById("apellido");

apellido.addEventListener("keydown", () => {
  console.log("keydown");
}); */

/* let apellido = document.getElementById("apellido");
let saludo = document.getElementById("saludo");

apellido.addEventListener("keyup", (e) => {
  if(e.key === "Enter"){
    saludo.className = "blue";
  }

  if(e.key === "a"){
    saludo.className = "yellow";
  }
}); */

//let input = document.getElementById("nombre");
/* input.addEventListener("change", () => {
  console.log("cambiaste");
}); */

/* input.addEventListener("input", () => {
  let filtro = input.value;
  console.log(input.value);
}); */

/* let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  console.log(e.target.children[0].value);
} */

let input = document.getElementById("input");
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  console.log(input.value);
})