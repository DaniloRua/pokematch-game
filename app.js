const PokeAPI = "https://pokeapi.co/api/v2/pokemon/1"
const gameBoard = document.getElementById('game');
let cards = document.querySelectorAll('.cards');
const card1 = document.getElementById('c1');

// flip cards
cards.forEach(function(card){
    card.addEventListener('click',function(){
        card.classList.toggle('cards-back'),
        setTimeout(() => {card.classList.toggle('cards-back')},3000)
    })
})

//mixing the cards every reload
cards.forEach(function(card) { 
    let mixing = Math.floor(Math.random() * 12)
    card.style.order = mixing
});


// name and sprites
const pokemonPromises = fetch(PokeAPI).then((data) => data.json())
.then((pokemonPromises) => console.log(pokemonPromises));


// sprites test
fetch(spritePokemon)
.then((res) => res.json())
.then((data) => console.log(data))





const displayPromises = pokemonPromises => {
    return `
    <div class="card">
        <h2>${pokemonPromises.name} </h2>
    </div>`
}

//Display... test
function ElementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild
}
const decoy = ElementFromHtml(`
<h2>${pokemonPromises.name}</h2>
`)



//generate random number
const randomFaceCard = function () {
   let mix = Math.floor(Math.random() *151)
   console.log(mix);
   return mix
   
}
 


// fazer uma funcao random para concatenar no link de download de sprites
//jogar os valores em um array 
// designar cada valor do array para 6 cards e duplicar
//utilizar a funca random para sortear a posicao de cada pokemon

// reload the game
function resetGame() {
    document.location.reload();
}


function stopToggle(f){
    clearTimeout(f)
}

//background-image: url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");

