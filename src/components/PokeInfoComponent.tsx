"use client";

import { PokeInfo1 } from "@/lib/interfaces";
import React, { useState } from "react";
import EvolutionComponent from "./EvolutionComponent";
import MovesComponent from "./MovesComponent";
import AbilitiesComponent from "./AbilitiesComponent";
import LocationsComponent from "./LocationsComponent";
import TypeComponent from "./TypeComponent";

const PokeInfoComponent = (props: PokeInfo1) => {
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [isFavored, setIsFavored] = useState<boolean>(false);

  const handleShinySwitch = () => setIsShiny(!isShiny);
  const handleFavorite = () => {
    setIsFavored(!isFavored);
  };

  const CapitalizeFirstLetter = (word: string) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  };

  
  return (
    <section
      id="bodyContent"
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 bg-[rgb(255,255,255,0.6)] border-[1.5px] rounded-2xl mt-3 mb-5 w-[100%] md:max-w-182 lg:max-w-228 xl:max-w-274 self-center lg:p-6"
    >
      <div className="lg:col-span-3">
        <div
          id="nameSection"
          className="flex text-3xl md:text-[32px] lg:text-5xl mt-6 px-4 sm:px-24 md:px-4 lg:px-50 lg:m-0 xl:px-73"
        >
          <div>
            <div id="notFav" className="">
              <img
                className="w-9 lg:w-12 hover:cursor-pointer"
                src={isFavored ? `/assets/filled_star.png` : `/assets/star.png`}
                alt="star"
                onClick={handleFavorite}
              />
            </div>
          </div>
          <div className="grow text-center ">
            <h1 id="pokeName">{CapitalizeFirstLetter(props.pokeName)}</h1>
          </div>
          <div>
            <h1 id="pokeId">{props.pokeId.toString().padStart(3, "0")}</h1>
          </div>
        </div>
        <div
          id="imgSection"
          className="flex flex-col items-center self-center px-16 pt-4 "
        >
          <div className="max-w-67">
            <img
              id="img1"
              className="hover:cursor-pointer"
              src={isShiny ? props.pokeImageShiny : props.pokeImageDefault}
              alt="pokemon"
              onClick={handleShinySwitch}
            />
          </div>
          <p id="form">{isShiny ? "Form: Shiny" : "Form: Default"}</p>
        </div>
        <TypeComponent pokeTypes={props.pokeTypes}/>
      </div>
      <EvolutionComponent pokeEvolutions={props.pokeEvolutions}/>
      <MovesComponent pokeMoves={props.pokeMoves}/>
      <AbilitiesComponent pokeAbilities={props.pokeAbilities}/>
      <LocationsComponent pokeLocations={props.pokeLocations}/>
    </section>
  );
};

export default PokeInfoComponent;
