// llamar APi
const URL_API = "https://rickandmortyapi.com/api/character";
const SEARCH = "https://rickandmortyapi.com/api/character/?name=";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
const dialog = document.querySelector("dialog");

// buscar personaje hacia la API
const getPersonajes = async (url) => {
  try {
    const res = await fetch(url);
    if (res.status === 404) {
      alert("No hay personajes");
    } else {
      const data = await res.json();
      console.log(data.results);
      showPersonajes(data.results);
    }
  } catch (error) {
    console.log(error);
  }
};

getPersonajes(URL_API);

// mostrar personajes
const showPersonajes = (personajes) => {
  if (personajes.length == 0) {
    alert("No hay personajes");
  } else {
    main.innerHTML = "";
    personajes.forEach((personaje) => {
      const { image, name, species, episode, status, origin, location } =
        personaje;
      // const episodios = episode.length
      const tarjetaPersonaje = document.createElement("div");
      tarjetaPersonaje.classList.add("personaje");
      tarjetaPersonaje.innerHTML += `
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
        <p>${species}</p>
        <button onclick="modal('${status}', '${location.name}', '${origin.name}', '${image}')">Ver más</button>
      `;
      main.appendChild(tarjetaPersonaje);
    });
  }
};

// buscar personaje
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const buscar = search.value;
  if (buscar !== "") {
    getPersonajes(SEARCH + buscar);
  } else {
    window.location.reload();
  }
});

// modal que muestra los detalles del personaje
function modal(status, location, origin, image) {
  const createModal = document.createElement("div");
  createModal.classList.add("modal");
  main.appendChild(createModal);
  createModal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <img src="${image}" />
      <p>Estado: ${status}</p>
      <p>Localizacion: ${location}</p>
      <p>Origen: ${origin}</p>
    </div>
  `;
}

// cerra modal
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.remove();
}
