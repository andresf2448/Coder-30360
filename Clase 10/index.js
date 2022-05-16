/* localStorage.setItem("nombre", "carolin");
localStorage.setItem("edad", "15");
localStorage.setItem("direccion", "carrera");

for(let i = 0; i < localStorage.length; i++){
  let clave = localStorage.key(i);
  let valor = localStorage.getItem(clave);

  console.log(`clave ${clave} valor ${valor}`);
}

localStorage.setItem("puntaje", puntaje)
let puntaje = localStorage.getItem("puntaje") */

/* localStorage.removeItem("nombre"); */

/* localStorage.setItem("obj", {nombre: "andres"}) */

/* const persona = {nombre: "maria", edad: 19};
const personaJson = JSON.stringify(persona); */

/* localStorage.setItem("persona", personaJson); */
/* const personaRecuperada = localStorage.getItem("persona");
console.log(JSON.parse(personaRecuperada)); */

/* const televisores = [
  {id: 1, tipo: "lg", precio: 1000},
  {id: 2, tipo: "samsung", precio: 500}
]

let ponerStorage = (clave, valor) => {
  localStorage.setItem(clave, valor);
}

for(const televisor of televisores){
  ponerStorage(televisor.id, JSON.stringify(televisor))
}

localStorage.setItem("televisores", JSON.stringify(televisores)); */

/* let televisores = localStorage.getItem("televisores")
console.log(JSON.parse(televisores)); */

let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `${sessionStorage.getItem("usuario")}`;
  document.body.append(contenedor);
}else{
  usuario = prompt("ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
}

/* setTimeout(()=>{
  sessionStorage.clear()
  window.location.reload()
}, 100000) */