function resetGame() {
    document.location.reload();
}

const pokeAPIBaseurl = 'http://pokeapi.co/api/v2/pokemon/';

function loadPokemon (){
fetch(pokeAPIBaseurl )
    .then( response => response.json())
    .then((data) => {console.log(data)
    const selectPokemon =  data['name']
        console.log(selectPokemon)
})
}


loadPokemon()