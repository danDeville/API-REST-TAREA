// llamar APi
const URL_API = "https://rickandmortyapi.com/api/character";
const search = "https://rickandmortyapi.com/api/character/?name=";
const divPersonajes = document.querySelector(".personajes");

const getApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    data.results.forEach((personaje) => {
      const { image, name, species, episode, status, origin, location } =
        personaje;

      const lengthEpisode = episode.length;

      //   modal(status);

      const card = document.createElement("div");
      card.classList.add("card-personaje");
      divPersonajes.appendChild(card);
      card.innerHTML = `
        <img src="${image}" alt="${name}">
        <h2>Nombre: ${name}</h2>
        <p>Especies: ${species}</p>
        <p>Localizacion: ${location.name}</p>
        <p>Episodios: ${lengthEpisode}</p>
        <p>Origen: ${origin.name}</p>
        <button  onclick="modal('${status}')">Ver mas</button>
        `;
    });
  } catch (error) {
    console.log(error);
  }
};

const modal = (estado) => {
  console.log(estado);
};

getApi(URL_API);
