import { redirect } from "next/navigation";

const GetPokemonInfo = async (pokename: string) => {
  const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}/`);
  if (!promise.ok) {
    redirect('/pokemon');
  }else{
    const data = await promise.json();
    if(data.id >= 650){
      redirect('/pokemon');
    }
    return data;
  }
};

const GetPokemonInfoNoRestriction = async(pokemon: string) => {
  const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
  const data = await promise.json()
  return data
} 

const GetApiwithUrl = async (url: string) => {
  const promise = await fetch(url);
  const data = promise.json();
  return data;
};

const GetSpeciesApiWithId = async (id: number) => {
  const promise = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  const data = promise.json();
  return data;
};
  
const GetTypeIcon = (type: string) => {
  switch(type.toString().toLowerCase()){
      case "grass":
          return "/assets/pokemonTypes/grass.png";
      case "fire":
          return "/assets/pokemonTypes/fire.png"
      case "water":
          return "/assets/pokemonTypes/water.png"
      case "ground":
          return "/assets/pokemonTypes/ground.png"
      case "normal":
          return "/assets/pokemonTypes/normal.png"
      case "fighting":
          return "/assets/pokemonTypes/fighting.png"
      case "ghost":
          return "/assets/pokemonTypes/ghost.png"
      case "dragon":
          return "/assets/pokemonTypes/dragon.png"
      case "rock":
          return "/assets/pokemonTypes/rock.png"
      case "ice":
          return "/assets/pokemonTypes/ice.png"
      case "bug":
          return "/assets/pokemonTypes/bug.png"
      case "fairy":
          return "/assets/pokemonTypes/fairy.png"
      case "psychic":
          return "/assets/pokemonTypes/psychic.png"
      case "dark":
          return "/assets/pokemonTypes/dark.png"
      case "steel":
          return "/assets/pokemonTypes/steel.png"
      case "flying":
          return "/assets/pokemonTypes/flying.png"
      case "electric":
          return "/assets/pokemonTypes/electric.png"
      default:
          return "/assets/pokemonTypes/poison.png"
  }
}



export {GetPokemonInfo, GetApiwithUrl, GetSpeciesApiWithId, GetPokemonInfoNoRestriction, GetTypeIcon}