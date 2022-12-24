const PokeAPI = "https://pokeapi.co/api/v2/pokemon/"
const gameBoard = document.getElementById('game');
let cards = document.querySelectorAll('.cards');

let card1;
let card2;
let pairs = 0;
let img1
let name1;

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
                pokemonImg.setAttribute('id', 'imgCard');
                card.appendChild(pokemonImg).style = "width:10em;height:10em;margin-top:0px"

                
                 // flip cards
+
                card.addEventListener('click', function () {

               
                    if ( !card1 && !card2 ) {

                        card1 = card;                
                        card.classList.toggle('cards-back');
                        img1 =pokemonImg
                        pokemonImg.classList.toggle('sprite');
                        name1 =  pokeName
                        pokeName.classList.toggle('sprite');
                       
                    } else if ( card1 && !card2 ) {
                     
                        card2 = card; 

                        card.classList.toggle('cards-back');
                        pokemonImg.classList.toggle('sprite');
                        pokeName.classList.toggle('sprite');
                       
                        
                        if (card1.id === card2.id){
                       console.log(card1.id)
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
                            // open a modal window
                        } else {
                            console.log(card1)
                            console.log(card2)
                            setTimeout(() =>{
                              
                             


                                card2.classList.add('cards');
                                card2.classList.remove('cards-back');
                                pokemonImg.classList.remove('sprite');
                                pokeName.classList.remove('sprite');
                              
                                card1.classList.add('cards');
                                card1.classList.remove('cards-back');
                                pokemonImg.classList.remove('sprite');
                                pokeName.classList.remove('sprite');
                                   
                                img1.classList.remove('sprite');
                                name1.classList.remove('sprite');
                                card1 = null;
                                card2 = null;
                                 
                                
                            },1500)
                        }
                    }
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

