/* function cargarLocalStorage() {
  const productosIniciales = [
    { id: 1, producto: "Pan" },
    { id: 2, producto: "Leche" },
    { id: 3, producto: "Harina" },
    { id: 4, producto: "Cafe" },
  ];

  localStorage.setItem("productos", JSON.stringify(productosIniciales));
} */
/* cargarLocalStorage(); */
/* function agregar(nombre){
  let listaProductos = JSON.parse(localStorage.getItem("productos"));
  let productico = {id: listaProductos.length + 1, producto: nombre};

  listaProductos.push(productico);
  localStorage.setItem("productos", JSON.stringify(listaProductos));
} */

/* let nombre = prompt("Por favor ingresa el producto");
if(nombre != null){
  agregar(nombre);
} */

/* function renderizar(){
  let listaProductos = JSON.parse(localStorage.getItem("productos"));
  listaProductos.forEach(producto => {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h1>${producto.id}</h1>
                            <h2>${producto.producto}</h2>`;
    document.body.append(contenedor);
  });
}

renderizar(); */