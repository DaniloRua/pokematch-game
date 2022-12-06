const  cards = document.querySelector('.cards')
const pokeAPIBaseurl = 'http://pokeapi.co/api/v2/pokemon/';
const spritePokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";

function resetGame() {
    document.location.reload();
}

function loadPokemon (){
fetch(pokeAPIBaseurl )
    .then( response => response.json())
    .then((data) => {console.log(data)
    const selectPokemon = data['results']
        console.log(selectPokemon)
})
}

loadPokemon()



fetch(spritePokemon)
.then((data) => {console.log(data)});


function flip(){
    cards.classList.toggle('cards-back');
    turnBack();
}

function turnBack(){   
    console.log('turning back'); 
    setTimeout(() => {cards.classList.toggle('cards-back')},3000)
    
}

function stopToggle(f){
    clearTimeout(f)
}


