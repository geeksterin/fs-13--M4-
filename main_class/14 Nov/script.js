// console.log("Pokemon");

/**
 * 1. Design UI
 * 2. Design the card using JS
 * 3. Get the initial data using API
 * 4. Render the data on  UI with initial data set
 * 5. Register events on form
 * 6. Get the data and filter it based on user input
 * 7. Re-render the UI
 * 8. Code Optimization
 */

const createPokemonCard = (pokemon) => {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");
  card.innerHTML = `  
  <p>#${pokemon.id}</p>
  <div class="front">
    <img src="${pokemon.sprites.front_default}" alt="Pokemon Image" />
    <h3>${pokemon.name}</h3>
    <h5>${pokemon.types[0].type.name}</h5>
  </div>
  <div class="back">
    <p>Abilities : ${pokemon.abilities
      .map((ability) => ability.ability.name)
      .join(", ")}</p>
  </div>`;
  return card;
};

const fetchPokemonTypes = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const pokemonTypes = await response.json();
    const pokemonCategory = pokemonTypes.results.map(
      (category) => category.name
    );
    // console.log(pokemonCategory);
    return pokemonCategory;
    // console.log(pokemonTypes);
  } catch (err) {
    console.log(err);
    alert("Something went wrong, please try after some time");
  }
};

const renderPokemonTypes = async () => {
  const pokemonCategoryList = await fetchPokemonTypes();
  const pokemonType = document.getElementById("pokemonType");

  pokemonCategoryList.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.innerText = category;
    pokemonType.append(option);
  });
};

renderPokemonTypes();

const fetchPokemonDetails = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
    response.json()
  );
};

const arrayOfPokemonDetailPromises = [];
for (let i = 1; i <= 50; i++) {
  const pokemonPromise = fetchPokemonDetails(i);
  arrayOfPokemonDetailPromises.push(pokemonPromise);
}
let pokemonList = [];
const pokemonContainer = document.getElementById("pokemonContainer");
Promise.all(arrayOfPokemonDetailPromises).then((pokemonDetails) => {
  //   console.log(pokemonDetails);
  pokemonList = pokemonDetails;
  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get("pokemonType")) {
    console.log(pokemonList);
    // pokemonList.filter(pokemon => pokemon.)
  }

  pokemonList.forEach((pokemon) => {
    const pokemonCard = createPokemonCard(pokemon);
    pokemonContainer.append(pokemonCard);
  });
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  //   console.log(pokemonList);
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  pokemonContainer.innerHTML = "";
  filteredPokemonList.forEach((pokemon) => {
    const pokemonCard = createPokemonCard(pokemon);
    pokemonContainer.append(pokemonCard);
  });
  //   console.log(filteredPokemonList);
});

// console.log(window.location.search);
