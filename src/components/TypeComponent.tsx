import React from "react";

const TypeComponent = () => {
  return (
    <div className="flex justify-center text-[28px] lg:text-[32px] px-2 pt-4">
      <div className="flex">
        <div className="max-w-12 mr-2">
          <img
            id="typeImg"
            className="text-[16px] "
            src="/"
            alt="pokemon type"
          />
        </div>
        <h1 id="pokeType1">Type</h1>
      </div>
      <div id="secondaryType" className="ml-6 flex">
        <div className="max-w-12 mr-2">
          <img
            id="type2Img"
            className="text-[16px] "
            src="/"
            alt="pokemon 2nd type"
          />
        </div>
        <h1 id="pokeType2">Type</h1>
      </div>
    </div>
  );
};

export default TypeComponent;
