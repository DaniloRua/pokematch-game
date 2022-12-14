const PokeAPI = "https://pokeapi.co/api/v2/pokemon/"
const gameBoard = document.getElementById('game');
let cards = document.querySelectorAll('.cards');




//name and sprites
const pokemonPromises = fetch(PokeAPI).then((data) => data.json())
    .then((pokemonPromises) => {

        console.log(pokemonPromises);
        const promises = pokemonPromises.results.slice(0, -14)
        let doublePromises = promises.concat(promises)
        console.log(doublePromises)
        cards.forEach((card, index) => {

            const pokemon = doublePromises[index]
            let pokeName = document.createElement('p');
            pokeName.setAttribute('id', `${pokemon.name}`);
            card.appendChild(pokeName).style = "margin: 1vh; color: white";
            pokeName.innerHTML = `${pokemon.name}`
            const pokemonUnitsUrl = pokemon['url']
            fetch(pokemonUnitsUrl).then((data) => data.json()).then(function sprites(sprites) {
                const spritesUnits = sprites['sprites']
                const pokemonImg = document.createElement('img');
                pokemonImg.setAttribute('src', `${spritesUnits['front_default']}`);
                pokemonImg.setAttribute('id', 'frontCard');
                card.appendChild(pokemonImg).style = "width:9em ;background-size: contain;"

                card.addEventListener('click', function () {

                    card.classList.toggle('cards-back');
                    pokemonImg.classList.toggle('sprite');
                    pokeName.classList.toggle('sprite');
                    setTimeout(() => { card.classList.toggle('cards-back'); pokemonImg.classList.toggle('sprite');pokeName.classList.toggle('sprite');

                }, 2000)
                })
            })
    

        })
        

        
    })



// flip cards










//mixing the cards every reload
cards.forEach(function (card) {
    let mixing = Math.floor(Math.random() * 12)
    card.style.order = mixing
    //
});


















// reload the game
function resetGame() {
    document.location.reload();
}


function stopToggle(f) {
    clearTimeout(f)
}
