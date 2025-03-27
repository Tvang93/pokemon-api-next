import PokeInfoComponent from "@/components/PokeInfoComponent";
import SearchBar from "@/components/SearchBar";
import { GetPokemonInfo } from "@/lib/services";
import React from "react";

const PokemonPage = async ({
  params,
}: {
  params: Promise<{ pokemonName: string }>;
}) => {
  const { pokemonName } = await params;
  const PokeData = await GetPokemonInfo(pokemonName);

  return (
    <div className="flex flex-col">
      <PokeInfoComponent
        pokeName={PokeData.name}
        pokeId={PokeData.id}
        pokeImageDefault={PokeData.sprites.other["official-artwork"].front_default}
        pokeImageShiny={PokeData.sprites.other["official-artwork"].front_shiny}
      />
    </div>
  );
};

export default PokemonPage;
