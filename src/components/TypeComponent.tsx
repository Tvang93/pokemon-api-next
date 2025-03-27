import { PokeTypes } from "@/lib/interfaces";
import { GetTypeIcon } from "@/lib/services";
import React from "react";

const TypeComponent = (props: PokeTypes) => {
    const CapitalizeFirstLetter = (word: string) => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    };

    const types = props.pokeTypes
  return (
    <div className="flex justify-center text-[28px] lg:text-[32px] px-2 pt-4">
        {
            types.map((types ,key: number) => {
                return (
                <div className="flex me-2" key={key}>
                    <div className="max-w-12 mr-2">
                        <img
                            id="typeImg"
                            className="text-[16px] "
                            src={GetTypeIcon(types.type.name)}
                            alt="pokemon type"
                        />
                    </div>
                    <h1 id="pokeType1">{CapitalizeFirstLetter(types.type.name)}</h1>
                </div>)
            })
        }
    </div>
  );
};

export default TypeComponent;
