const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    const output = document.querySelector("#output");
    
    results = data;
    const html = `<h2> ${results.name}<h2>
    <img src="${results.sprites.front_default}" alt="img">`
    output.innerHTML=html
    console.log("first: ", results);
}


const pokemonslink ="https://pokeapi.co/api/v2/pokemon";


function doStuffList(data){
    console.log(data)
    const pokemons= document.querySelector("#pokemons");
    const pokelist= data.results;

    pokelist.sort((a, b) => a.name.localeCompare(b.name));

    pokelist.map(function(pokemon){
        let li= document.createElement("li")
        let aa= document.createElement("img")
        li.textContent=pokemon.name;
        aa.src=pokemon.url.front_default;
        pokemons.appendChild(aa);
        pokemons.appendChild(li);
        
    })
    
}

// function sortpokemon(list){
//     let sortedlist= list.sort()
//     return sortedlist

// }

async function pokemonlist(url){
    const response = await fetch(url);
    if(response.ok){
        const dados = await response.json();
        doStuffList(dados);
    }

}

pokemonlist(pokemonslink);
getPokemon(url);
console.log("second: ", results);