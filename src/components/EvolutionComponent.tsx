"use client";

import { PokeEvolutions, PokeInfo } from "@/lib/interfaces";
import { CapitalizeFirstLetter, GetPokemonInfoNoRestriction } from "@/lib/services";
import React, { useEffect, useState } from "react";

const EvolutionComponent = (props: PokeEvolutions) => {
  const [firstStageData, setFirstStageData] = useState<PokeInfo[]>([]);
  const [secondStageData, setSecondStageData] = useState<PokeInfo[]>([]);
  const [thirdStageData, setThirdStageData] = useState<PokeInfo[]>([]);

  const firstStage: string[] = [props.pokeEvolutions.chain.species.name];
  const secondStage = props.pokeEvolutions.chain.evolves_to.map(
    (evo) => evo.species.name
  );
  const thirdStage = props.pokeEvolutions.chain.evolves_to
    .map((evo) => evo.evolves_to.map((evo) => evo.species.name))
    .flat();

  const GetPokeData = async (stages: string[]) => {
    const promise = stages.map(mon => GetPokemonInfoNoRestriction(mon))
    const data = await Promise.all(promise)
    return data
  }

  useEffect(()=>{
    const fetchData = async() => {
      const firstData = await GetPokeData(firstStage);
      const secondData = await GetPokeData(secondStage);
      const thirdData = await GetPokeData(thirdStage);
      setFirstStageData(firstData);
      setSecondStageData(secondData);
      setThirdStageData(thirdData);
    }
    fetchData()
  }, [])

  return (
    <div className="md:mt-6 lg:row-start-2 lg:row-span-3 lg:mt-0 flex justify-center">
      <div className="border-1 rounded-sm w-62 h-80 lg:w-[100%] lg:h-[100%] lg:pb-6 bg-[rgb(63,161,41,0.3)] self-center px-2 py-1 shrink">
        <h1>Evolution Line:</h1>
        {
          props.pokeEvolutions.chain.evolves_to[0] != undefined ? (
        
        <div id="evoBox" className="flex flex-col gap-y-5">
          <div className="flex justify-center m-3">
            { firstStageData[0] != undefined ? (
              firstStageData.map((mon) => {
                return (
                  <div className="flex flex-col items-center" key={mon.id}>
                    <img className="max-w-15 lg:max-w-20" src={mon.sprites.other["official-artwork"].front_default} alt='pokemon' />
                    <h1>{CapitalizeFirstLetter(mon.name)}</h1>
                  </div>
                )
              })
            ) : (
              <></>
            )
            }
          </div>
          <div className={`flex m-3 gap-x-6 ${secondStageData[2] == undefined ? `justify-center` :`overflow-x-scroll`}`}>
            {
              secondStageData.map((mon, key:number) => {
                if(mon.id>=650) return <></>
                return (
                  <div className="flex flex-col items-center" key={key}>
                    <img className="max-w-15 lg:max-w-20" src={mon.sprites.other["official-artwork"].front_default} alt='pokemon' />
                    <h1>{CapitalizeFirstLetter(mon.name)}</h1>
                  </div>
                )
              })
            }
          </div>
          <div className={`flex m-3 gap-x-6 ${secondStageData[2] == undefined ? `justify-center` :`overflow-x-scroll`}`}>
            {
              thirdStageData.map((mon, key:number) => {
                if(mon.id>=650) return <></>
                return (
                  <div className="flex flex-col items-center" key={key}>
                    <img className="max-w-15 lg:max-w-20" src={mon.sprites.other["official-artwork"].front_default} alt='pokemon' />
                    <h1>{CapitalizeFirstLetter(mon.name)}</h1>
                  </div>
                )
              })
            }
          </div>
        </div> 
        ) : (
        <div className="flex justify-center items-center h-[100%]">
          <h1 className="text-4xl">N/A</h1>
        </div>
        )}
      </div>
    </div>
  );
};

export default EvolutionComponent;
