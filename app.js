
function resetGame() {
    document.location.reload();
}
const pokeAPIBaseurl = 'http://pokeapi.co/api/v2/pokemon/';
const spritePokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
function loadPokemon (){
fetch(pokeAPIBaseurl )
    .then( response => response.json())
    .then((data) => {console.log(data)
    const selectPokemon =  data['results']
        console.log(selectPokemon)
})
}



const  cards = document.querySelector('.cards')

fetch(spritePokemon)
.then((data) => {console.log(data)});




loadPokemon()