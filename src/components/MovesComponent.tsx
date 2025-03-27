import { PokeMoves } from "@/lib/interfaces";
import React from "react";

const MovesComponent = (props: PokeMoves) => {
    const CapitalizeFirstLetter = (word: string) => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    };

    const BreakWord = (word: string) => {
        return word.split('-').map(word => CapitalizeFirstLetter(word)).join(' ')
    }

    const moves = props.pokeMoves.map(moves => BreakWord(moves.move.name)).join(", ")

  return (
    <div className="md:col-span-2 lg:col-start-2 bg-[rgb(255,0,0,0.6)] border-1 rounded-sm h-42 mx-8 px-2 py-1 lg:m-0 overflow-y-scroll">
      <h1>Moves:</h1>
      <p>{moves}</p>
    </div>
  );
};

export default MovesComponent;
