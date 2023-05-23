const time = new Date();
const year = time.getFullYear();


const lastmodi= document.lastModified;
const lastupdate = new Date(lastmodi);
const lastup = lastupdate.toLocaleString('en-Us');

document.querySelector("#year").innerHTML= year;

document.querySelector('#updt').innerHTML=lastup;

const container = document.querySelector('.poke');
const button = document.querySelector("#journeybutton");
const pokedex = document.querySelector(".pokedex");



button.addEventListener('click', function() {

    
    container.classList.add('active');
    setTimeout(() => {
        container.style.display = 'none';
        button.style.display='none'
        pokedex.style.display='flex'
        pokedex.style.flexDirection='column'; ; 
        
      }, 440);
    




});

//Here we go...

const pokemonpic = document.querySelector("#pokemon")
const pokemonname = document.querySelector("#name");
const next = document.querySelector("#next")
// const pokemonnumber= document.querySelector("");
const pokeball = document.querySelector("#pokeball")
let pokemon= 1;


async function getApilink(pokemon){
  const apilink = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await apilink.json()
  return data

}

async function GetPokemon(pokemon){
  const data = await getApilink(pokemon)
  // pokemonnumber.innerHTML=data.number;
  pokemonname.innerHTML=data.name;
  pokemonpic.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

const form = document.querySelector('.pokedex');

next.addEventListener('click', function() {
  pokemon +=1;
  GetPokemon(pokemon)
});

input.addEventListener('input', function() {
  pokemon = input.value;
  pokeball.style.display= 'flex'
  GetPokemon(pokemon);
});




// form.addEventListener('submit', function(){
//   const input = document.querySelector("#input");
//   GetPokemonName(input.value);
// })


