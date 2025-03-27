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
  console.log(PokeData);

  // const CapitalizeFirstLetter = (word: string) => {
  //   return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
  // }

  // const MapThroughData = (object, var1, var2, var3) =>
  //   object[`${var1}`].map((arr) => arr[`${var2}`][`${var3}`]);

  return (
    <div className="flex flex-col bg-[url(/assets/pokemonCenter.jpg)] min-h-screen bg-cover bg-no-repeat bg-center bg-fixed">
      <SearchBar />
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
