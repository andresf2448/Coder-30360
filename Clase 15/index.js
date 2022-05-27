/* const lista = document.querySelector('#listado')

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
    `;
      lista.append(li);
    });
  });
 */

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Coderhouse",
    body: "Post de prueba",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
 */

/* const lista = document.querySelector("#listado");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h4>${producto.nombre}</h4>
        <p>${producto.precio}</p>
        <p>Código: ${producto.id}</p>
        <hr/>
    `;

      lista.append(li);
    });
  });
 */

/* const listaPost = async () => {
  const lista = document.querySelector("#listado");

  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  data.forEach((publicacion) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${publicacion.title}</h4>
        <p>${publicacion.body}</p>
    `;
    lista.append(li);
  });
};

listaPost(); */
