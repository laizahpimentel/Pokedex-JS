const fetchPokemon = () => {
    const getPokemonUrl = `https://pokeapi.com/api/v2/pokemon/${id}`
    
    for ( let i = 1; i <= 150; i++){
        fetch(url).then(response => response.json())
    }
}

// Requisiçoes Assincronas - Metodo fetch requisiçao HTPP/URL
fetchPokemon ()