// "use client";

import { PokeEvolutions } from "@/lib/interfaces";
import React, { useState } from "react";

const EvolutionComponent = (props: PokeEvolutions) => {
  // const [evolutionLine, setEvolutionLine] = useState<string[]>([""]);
  console.log(props.pokeEvolutions.chain.species.name);
  const firstStage: string[] = [];
  firstStage.push(props.pokeEvolutions.chain.species.name);
  const secondStage = props.pokeEvolutions.chain.evolves_to.map(
    (evo) => evo.species.name
  );
  const thirdStage = props.pokeEvolutions.chain.evolves_to
    .map((evo) => evo.evolves_to.map((evo) => evo.species.name))
    .flat();

  console.log("firstStage: " + firstStage);
  console.log("2Stage: " + secondStage);
  console.log("3Stage: " + thirdStage);

  return (
    <div className="md:mt-6 lg:row-start-2 lg:row-span-3 lg:mt-0 flex justify-center">
      <div className="border-1 rounded-sm w-62 h-80 lg:w-[100%] lg:h-[100%] lg:pb-6 bg-[rgb(63,161,41,0.3)] self-center px-2 py-1">
        <h1>Evolution Line:</h1>
        {
          props.pokeEvolutions.chain.evolves_to[0] != undefined ?
        
        <div id="evoBox" className="flex flex-col gap-y-5">
          <div>
            A
          </div>
          <div>
            B
          </div>
          <div>
            C
          </div>
        </div> 
        :
        <div className="flex justify-center items-center">
          <h1>N/A</h1>
        </div>
        }
      </div>
    </div>
  );
};

export default EvolutionComponent;
