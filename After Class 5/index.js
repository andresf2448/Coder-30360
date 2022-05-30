async function getCharacters() {
  try {
    const response = await axios("https://rickandmortyapi.com/api/character");
    const data = response.data.results;

    const gender = prompt("Ingrese el gender");

    const dataFilter = data.filter(character => character.gender === gender);

    const container = document.getElementById("container");

    dataFilter.forEach((character) => {
      const item = document.createElement("div");

      item.innerHTML = `
      <h1>${character.name}</h1>
      <p>${character.status}</p>
      <p>${character.gender}</p>
      <img src="${character.image}">
    `;

      container.append(item);
    });
  } catch (err) {
    console.log(err);
  }
}

getCharacters();