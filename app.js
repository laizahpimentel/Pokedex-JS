const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    
    const pokemonPromises = [] 

    for ( let i = 1; i <= 150; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
        // fetch(url).then(response => response.json())
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {
        //obteve uma array com + 150 pokemons
        console.log(pokemons)

        const listPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typwInfo => typeInfo.type.name)

            accumulator +=
            `<li class="card">
            <img class="card-image ${types[0]}" />
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join('' | '')}</p>
            </li>
            `
            return accumulator
        }, '')
        //17:41
        console.log(listPokemons)
    })
}

// Requisiçoes Assincronas - Metodo fetch requisiçao HTPP/URL
fetchPokemon ()