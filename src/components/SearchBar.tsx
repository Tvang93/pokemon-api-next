"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const { push } = useRouter();
  const [pokemonName, setPokemonName] = useState<string>("");

  const handleSearch = () => {
    push(`/pokemon/${pokemonName}`);
  };

  return (
    <section
      id="searchBarContent"
      className="flex bg-[rgb(255,255,255,0.6)] mt-5 rounded-2xl w-[100%] md:max-w-182 lg:max-w-228 xl:max-w-274 self-center"
    >
      <div
        id="favoriteTabBtn"
        className="border-[1.5px] border-r-0 rounded-l-2xl px-2 py-1 self-center h-[100%]"
        data-drawer-target="favoritesTab"
        data-drawer-show="favoritesTab"
        aria-controls="favoritesTab"
      >
        <img className="w-8" src="/assets/searchbar/bookmark.png" alt="" />
      </div>
      <div
        id="randomBtn"
        className="border-[1.5px] px-1 py-1 self-center h-[100%]"
      >
        <img className="w-8" src="/assets/searchbar/shuffle.png" alt="" />
      </div>
      <div
        id="inputSection"
        className="grow shrink border-y-[1.5px] border-x-0 self-center"
      >
        <input
          id="searchBarField"
          type="text"
          placeholder="Search Pokemon"
          className="border-0 w-[100%] text-3xl py-[2px] ps-2 focus:outline-0"
          onChange={(e)=>setPokemonName(e.target.value)}
        />
      </div>
      <div
        id="searchSection"
        className="px-5 border-[1.5px] rounded-r-2xl py-1 self-center h-[100%]"
        onClick={handleSearch}
      >
        <img
          className="w-8"
          src="/assets/searchbar/search.png"
          alt="magnifying glass"
        />
      </div>
    </section>
  );
};

export default SearchBar;
