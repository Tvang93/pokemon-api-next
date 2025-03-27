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
  
  
  export {GetPokemonInfo, GetApiwithUrl, GetSpeciesApiWithId, GetPokemonInfoNoRestriction}