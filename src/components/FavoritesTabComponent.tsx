'use client'

import { useFavoritesContext } from "@/app/context/FavoritesContext";
import { GetFavoritesFromLocalStorage } from "@/lib/localstorage";
import { BreakWord } from "@/lib/services";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const FavoritesTabComponent = () => {
    const {push} = useRouter()
    const { isFavTabActive, setIsFavTabActive , update} = useFavoritesContext();

    const handleFavoritesTabSwitch = () => {
        setIsFavTabActive(!isFavTabActive)
      }

      const handleSearch = (pokemonName:string) => {
        push(`/pokemon/${pokemonName}`)
      };

      useEffect(()=>{
      }, [update])
    
  return (
    <div
      id="favoritesTab"
      className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-[rgb(0,0,0,0.8)] w-80 text-white"
      aria-labelledby="favorites-label"
    >
      <h5
        id="favorites-label"
        className="inline-flex text-center mb-4 text-4xl font-semibold"
      >
        Favorites
      </h5>
      <button
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
        onClick={handleFavoritesTabSwitch}
      >
        X
      </button>
      <div id="favoritesSelection" className="text-2xl">
        {
            GetFavoritesFromLocalStorage().map((pokemon:string, key:number) => {
                return(
                    <p className="hover:cursor-pointer" key={key} onClick={()=>handleSearch(pokemon)}>{BreakWord(pokemon)}</p>
                )
            })
        }
      </div>
    </div>
  );
};

export default FavoritesTabComponent;
