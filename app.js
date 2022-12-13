const PokeAPI = "https://pokeapi.co/api/v2/pokemon/"
const gameBoard = document.getElementById('game');
let cards = document.querySelectorAll('.cards');



// flip cards
cards.forEach(function(card){
    card.addEventListener('click',function(){
        card.classList.toggle('cards-back');
        
        setTimeout(() => {card.classList.toggle('cards-back')},3000)
    })
});



//name and sprites
const pokemonPromises = fetch(PokeAPI).then((data) => data.json())
.then((pokemonPromises) => {

 console.log(pokemonPromises); 
const promises = pokemonPromises.results.slice(0,-14)
let doublePromises = promises.concat(promises)


 console.log(doublePromises)
 

    cards.forEach((card,index) => {
    
    const pokemon = doublePromises[index]
    console.log(pokemon)
    let pokeName = document.createElement('p');
    pokeName.setAttribute('id',`${pokemon.name}`);
    card.appendChild(pokeName).style= "color: white";
    pokeName.innerHTML = `${pokemon.name}`;
    
    console.log(pokemon.url)
    
    const pokemonUnitsUrl = pokemon['url']

    const Sprites = fetch(pokemonUnitsUrl).then((data) => data.json()).then((sprites) => { 
        
        const  spritesUnits = sprites['sprites']
        console.log(spritesUnits['front_default']);
        
        const pokemonImg = document.createElement('img');

        pokemonImg.setAttribute('src',`${spritesUnits['front_default']}`);
        
        card.appendChild(pokemonImg)
    
    

    })


})
})






      
    
  
    //mixing the cards every reload
        cards.forEach(function(card) { 
        let mixing = Math.floor(Math.random() * 12)
        card.style.order = mixing
        //
    });
     
    
    
    
     
   



    
    
















/*


//Display... test
function ElementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild
}
const decoy = ElementFromHtml(`
<h2>${pokemonPromises.name}</h2>
`)

*/
/*
// fazer uma funcao random para concatenar no link de download de sprites
//jogar os valores em um array 
// designar cada valor do array para 6 cards e duplicar
//utilizar a funca random para sortear a posicao de cada pokemon
*/
// reload the game
function resetGame() {
    document.location.reload();
}


function stopToggle(f){
    clearTimeout(f)
}
