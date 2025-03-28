"use client";

import { GetPokemonInfo } from "@/lib/services";
import { useRouter } from "next/navigation";
import React, { useState, KeyboardEvent } from "react";
import FavoritesTabComponent from "./FavoritesTabComponent";
import { useFavoritesContext } from "@/app/context/FavoritesContext";

const SearchBar = () => {
  const { push } = useRouter();
  const [pokemonName, setPokemonName] = useState<string>("");
  const { isFavTabActive, setIsFavTabActive} = useFavoritesContext();

  const handleSearch = () => {
    push(`/pokemon/${pokemonName}`)
  };

  const handleEnterSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === "Eneter") push(`/pokemon/${pokemonName}`)
  }

  const handleRandomPokemon = async() => {
    function getRandomNumber(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    const randomNumber: number = getRandomNumber(0 ,650);
    const pokeData = await GetPokemonInfo(randomNumber.toString())
    const pokemonName = pokeData.name
    push(`/pokemon/${pokemonName}`)
  }

  const handleFavoritesTabSwitch = () => {
    setIsFavTabActive(!isFavTabActive)
  }

  return (
    <section
      id="searchBarContent"
      className="flex bg-[rgb(255,255,255,0.6)] mt-5 rounded-2xl w-[100%] md:max-w-182 lg:max-w-228 xl:max-w-274 self-center border-1"
    >
      <div
        id="favoriteTabBtn"
        className="rounded-l-2xl px-2 py-1 self-center h-[100%] hover:cursor-pointer"
        onClick={handleFavoritesTabSwitch}
      >
        <img className="w-8" src="/assets/searchbar/bookmark.png" alt="" />
      </div>
      <div
        id="randomBtn"
        className="px-1 py-1 self-center h-[100%] hover:cursor-pointer border-x-1"
        onClick={handleRandomPokemon}
      >
        <img className="w-8" src="/assets/searchbar/shuffle.png" alt="" />
      </div>
      <div
        id="inputSection"
        className="grow shrink self-center"
      >
        <input
          id="searchBarField"
          type="text"
          placeholder="Search Pokemon"
          className="w-[100%] text-xl sm:text-3xl py-[2px] ps-2 focus:outline-0 hover:cursor-text"
          onChange={(e)=>setPokemonName(e.target.value)}
          onKeyDown={(e)=>handleEnterSearch(e)}
        />
      </div>
      <div
        id="searchSection"
        className="px-5 py-1 self-center h-[100%] border-l-1 hover:cursor-pointer"
        onClick={handleSearch}
      >
        <img
          className="w-8"
          src="/assets/searchbar/search.png"
          alt="magnifying glass"
        />
      </div>
      {
        isFavTabActive && <FavoritesTabComponent/>
      }
    </section>
  );
};

export default SearchBar;
