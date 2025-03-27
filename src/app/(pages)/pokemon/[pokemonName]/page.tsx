import PokeInfoComponent from "@/components/PokeInfoComponent";
import SearchBar from "@/components/SearchBar";
import { GetApiwithUrl, GetPokemonInfo } from "@/lib/services";
import React from "react";

const PokemonPage = async ({
  params,
}: {
  params: Promise<{ pokemonName: string }>;
}) => {
  const { pokemonName } = await params;
  const PokeData = await GetPokemonInfo(pokemonName);
  // console.log(PokeData.types)
  // const types = PokeData.types
  // console.log(types)
  const locations = PokeData.location_area_encounters
  const PokeLocationData = await GetApiwithUrl(locations)



  return (
    <div className="flex flex-col">
      <PokeInfoComponent
        pokeName={PokeData.name}
        pokeId={PokeData.id}
        pokeImageDefault={PokeData.sprites.other["official-artwork"].front_default}
        pokeImageShiny={PokeData.sprites.other["official-artwork"].front_shiny}
        pokeMoves={PokeData.moves}
        pokeAbilities={PokeData.abilities}
        pokeLocations={PokeLocationData}
        pokeTypes={PokeData.types}
      />
    </div>
  );
};

export default PokemonPage;
