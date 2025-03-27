import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
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
                <i className="fa-regular fa-star fa-lg"></i>
              </div>
              <div id="isFav" className="hidden">
                <i className="fa-solid fa-star fa-lg hidden"></i>
              </div>
            </div>
            <div className="grow text-center ">
              <h1 id="pokeName">Pokemon</h1>
            </div>
            <div>
              <h1 id="pokeId">000</h1>
            </div>
          </div>
          <div
            id="imgSection"
            className="flex flex-col items-center self-center px-16 pt-4"
          >
            <div className="max-w-67">
              <img id="img1" className="" src="/" alt="pokemon" />
            </div>
            <p id="form">Form: Default</p>
          </div>
          <div
            id="typeSection"
            className="flex justify-center text-[28px] lg:text-[32px] px-2 pt-4"
          >
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
        </div>
        <div
          id="evoSection"
          className="md:mt-6 lg:row-start-2 lg:row-span-3 lg:mt-0 flex justify-center"
        >
          <div className="border-1 rounded-sm w-62 h-80 lg:w-[100%] lg:h-[100%] lg:pb-6 bg-[rgb(63,161,41,0.3)] self-center px-2 py-1">
            <h1>Evolution Line:</h1>
            <div id="evoBox" className="gap-y-5"></div>
          </div>
        </div>
        <div
          id="moveSection"
          className="md:col-span-2 lg:col-start-2 bg-[rgb(255,0,0,0.6)] border-1 rounded-sm h-42 mx-8 px-2 py-1 lg:m-0 overflow-y-scroll"
        >
          <h1>Moves:</h1>
          <p id="moves"></p>
        </div>
        <div
          id="abilitySection"
          className="md:col-span-2 lg:col-start-2 bg-[rgb(0,0,0,0.6)] border-1 rounded-sm text-white h-23 mx-8 px-2 py-1 lg:m-0 overflow-y-scroll"
        >
          <h1>Abilities:</h1>
          <p id="abilities"></p>
        </div>
        <div
          id="locationSection"
          className="md:col-span-2 lg:col-start-2 bg-[rgb(255,255,255,0.6)] border-1 rounded-sm h-42 mb-6 mx-8 px-2 py-1 lg:m-0 overflow-y-scroll"
        >
          <h1>Locations:</h1>
          <p id="locations"></p>
        </div>
      </section>
    </div>
  );
}
