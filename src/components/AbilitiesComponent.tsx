import { PokeAbilities } from "@/lib/interfaces";
import { BreakWord } from "@/lib/services";
import React from "react";

const AbilitiesComponent = (props: PokeAbilities) => {
    const abilities = props.pokeAbilities.map(abilities => BreakWord(abilities.ability.name)).join(", ")
  return (
    <div className="md:col-span-2 lg:col-start-2 bg-[rgb(0,0,0,0.6)] border-1 rounded-sm text-white h-23 mx-8 px-2 py-1 lg:m-0 overflow-y-scroll">
      <h1>Abilities:</h1>
      <p>{abilities}</p>
    </div>
  );
};

export default AbilitiesComponent;
