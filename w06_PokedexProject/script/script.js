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
let pokemonnumber= document.querySelector("#number");
const pokemonname = document.querySelector("#name");
const next = document.querySelector("#next");
const previous = document.querySelector("#previous");
const pokeball = document.querySelector("#pokeball");
const pokeball2= document.querySelector("#pokeball2");
const poketype = document.querySelector("#poketype");
let clastype= document.querySelectorAll(".type");



const form = document.querySelector('.pokedex');

let defaultpokemon= 315;
// let PreviousNext= parseInt(defaultpokemon);

async function getApilink(pokemon){
  const apilink = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  let data='';
  if(!apilink.ok){
    data= false
  }
  else{
  data = await apilink.json()
  }
  
  return data

}

async function GetPokemon(pokemon){
  const data = await getApilink(pokemon)
  if(data){
    pokemonnumber.innerHTML=`${data.id} -`;
    const int = data.id;
    defaultpokemon= parseInt(int);
    pokemonname.innerHTML=data.name;
    pokemonpic.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonname.style.display='flex';
    pokemonpic.style.display='flex'
    const types = data.types.map(typeObj => typeObj.type.name);
    let secondtype='';
    if (types[1]== undefined){
      types[1]= '';

    }
    else{
      secondtype=`/${types[1]}`
    }
    poketype.innerHTML = `${types[0]}${secondtype}`;
    clastype.forEach(element => {
      element.style.display = 'flex';
    });
  }
  else{
    clastype.forEach(element => {
      element.style.display = 'none';
    });
    pokemonnumber.innerHTML=`Not found ;-;`;
    pokemonname.style.display='none';
    pokemonpic.style.display='none'
    pokeball2.style.display='flex'
    
  }
 
}

GetPokemon(defaultpokemon);

input.addEventListener('input', function() {
  defaultpokemon= input.value;
  pokeball.style.display= 'flex'
  GetPokemon(defaultpokemon);

});

previous.addEventListener('click', function() {
  defaultpokemon-=1;
  pokeball2.style.display='none'
  pokeball.style.display= 'flex';
  setTimeout(() => {
    pokeball.style.display= 'none';
    pokeball2.style.display='flex'
  }, 800);
  GetPokemon(defaultpokemon)
});

next.addEventListener('click', function() {
  defaultpokemon+=1;
  pokeball2.style.display='none'
  pokeball.style.display= 'flex';
  setTimeout(() => {
    pokeball.style.display= 'none';
    pokeball2.style.display='flex'
  }, 800);
  
  GetPokemon(defaultpokemon)
});




// form.addEventListener('submit', function(){
//   const input = document.querySelector("#input");
//   GetPokemonName(input.value);
// })


