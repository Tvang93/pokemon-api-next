import PokeInfoComponent from "@/components/PokeInfoComponent";
import { GetApiwithUrl, GetPokemonInfo, GetSpeciesApiWithId } from "@/lib/services";
import React from "react";

const PokemonPage = async ({
  params,
}: {
  params: Promise<{ pokemonName: string }>;
}) => {
  const { pokemonName } = await params;
  const PokeData = await GetPokemonInfo(pokemonName);
  const locations = PokeData.location_area_encounters;
  const PokeLocationData = await GetApiwithUrl(locations);
  const pokeId = PokeData.id;
  const pokeSpecies = await GetSpeciesApiWithId(pokeId);
  const chainUrl = pokeSpecies.evolution_chain.url;
  const pokeEvolution = await GetApiwithUrl(chainUrl);


  return (
    <div className="flex flex-col">
      <PokeInfoComponent
        pokeName={PokeData.name}
        pokeId={pokeId}
        pokeImageDefault={PokeData.sprites.other["official-artwork"].front_default}
        pokeImageShiny={PokeData.sprites.other["official-artwork"].front_shiny}
        pokeMoves={PokeData.moves}
        pokeAbilities={PokeData.abilities}
        pokeLocations={PokeLocationData}
        pokeTypes={PokeData.types}
        pokeEvolutions={pokeEvolution}
      />
    </div>
  );
};

export default PokemonPage;
