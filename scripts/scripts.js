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
        <button onclick="modal('${status}', '${location.name}', '${origin.name}', '${image}')">Ver mas</button>
        `;
    });
  } catch (error) {
    console.log(error);
  }
};

function modal(status, location, origin, image) {
  const createModal = document.createElement("div");
  createModal.classList.add("modal");
  divPersonajes.appendChild(createModal);
  createModal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img src="${image}">
      <p>Estado: ${status}</p>
      <p>Localizacion: ${location}</p>
      <p>Origen: ${origin}</p>
    </div>
  `;
}

getApi(URL_API);
