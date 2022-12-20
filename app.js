const PokeAPI = "https://pokeapi.co/api/v2/pokemon/"
const gameBoard = document.getElementById('game');
let cards = document.querySelectorAll('.cards');

let card1;
let card2;
let pairs = 0;



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
            card.appendChild(pokeName).style = "margin-bottom:1px; color: yellow; margin: 0px; padding: 0px";
            pokeName.innerHTML = `${pokemon.name}`
            const pokemonUnitsUrl = pokemon['url']
            fetch(pokemonUnitsUrl).then((data) => data.json()).then(function sprites(sprites) {
                const spritesUnits = sprites['sprites']
                const pokemonImg = document.createElement('img');
                pokemonImg.setAttribute('src', `${spritesUnits['front_default']}`);
                pokemonImg.setAttribute('id', 'frontCard');
                card.appendChild(pokemonImg).style = "width:10em;height:10em;margin-top:0px"

                
                 // flip cards
+
                card.addEventListener('click', function () {

               
                    if ( !card1 && !card2 ) {

                        card1 = card;                
                        card.classList.toggle('cards-back');
                        pokemonImg.classList.toggle('sprite');
                        pokeName.classList.toggle('sprite');
                       
                    } else if ( card1 && !card2 ) {
                     
                        card2 = card; 

                        card.classList.toggle('cards-back');
                        pokemonImg.classList.toggle('sprite');
                        pokeName.classList.toggle('sprite');
                       
                        
                        if (card1.innerHTML === card2.innerHTML){
                       
                        console.log(card1)
                        console.log(card2)
                            card1.style.pointerEvents='none';
                            card2.style.pointerEvents='none';
                            card1= null;
                            card2= null;
                            pairs += 1;
                            console.log(pairs)
                        }
                            if(pairs >= 6){
                               setTimeout(() => alert('GAME OVER! F5 to replay'), 2000)
                            
                        } else{
                            console.log(card1)
                            console.log(card2)
    
                            card1.classList.toggle('.cards');
                            card2.classList.toggle('.cards');
                            pokemonImg.classList.toggle('sprite');
                            pokeName.classList.toggle('sprite');
                            card1 = null;  
                            card2 = null;
                        }
                        
                    }

                   
                    
                    card1 = card;
                    card1.style.pointerEvents = "none";
                    

                    
        
                })

                  
                 
            })
        })
    })







//mixing the cards every reload
/*
cards.forEach(function (card) {
    let mixing = Math.floor(Math.random() * 12)
    card.style.order = mixing
    //
});

*/


// reload the game
function resetGame() {
    document.location.reload();
}

