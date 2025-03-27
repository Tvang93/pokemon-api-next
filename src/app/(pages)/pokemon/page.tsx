import React from "react";

const page = () => {
  return (
    <section
      id="bodyContent"
      className="bg-[rgb(255,255,255,0.6)] border-[1.5px] rounded-2xl mt-3 mb-5 w-[100%] md:max-w-182 lg:max-w-228 xl:max-w-274 self-center lg:p-6"
    >
      <div className="flex flex-col justify-center items-center h-[50rem] p-12 gap-4">
        <h1 className="text-4xl font-bold text-center">Invalid Entry.</h1>
        <h2 className="text-2xl text-center">Please type in a Pokemon between Gen 1 and 5 or between Pokedex Entry 0 to 650.</h2>
      </div>
    </section>
  );
};

export default page;
