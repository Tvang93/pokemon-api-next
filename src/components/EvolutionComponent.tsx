import React from "react";

const EvolutionComponent = () => {
  return (
    <div className="md:mt-6 lg:row-start-2 lg:row-span-3 lg:mt-0 flex justify-center">
      <div className="border-1 rounded-sm w-62 h-80 lg:w-[100%] lg:h-[100%] lg:pb-6 bg-[rgb(63,161,41,0.3)] self-center px-2 py-1">
        <h1>Evolution Line:</h1>
        <div id="evoBox" className="gap-y-5"></div>
      </div>
    </div>
  );
};

export default EvolutionComponent;
