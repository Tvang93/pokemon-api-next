import React from 'react'

const SearchBar = () => {
  return (
    <section id="searchBarContent" className="flex bg-[rgb(255,255,255,0.6)] mt-5 rounded-2xl w-[100%] md:max-w-182 lg:max-w-228 xl:max-w-274 self-center">
        <div id="favoriteTabBtn" className="border-[1.5px] border-r-0 rounded-l-2xl px-2 py-1 self-center" data-drawer-target="favoritesTab" data-drawer-show="favoritesTab" aria-controls="favoritesTab">
            <i className="fa-regular fa-bookmark fa-lg"></i>
        </div>
        <div id="randomBtn" className="border-[1.5px] px-1 py-1 self-center">
            <i className="fa-solid fa-shuffle fa-lg"></i>
        </div>
        <div id="inputSection" className="grow shrink border-y-[1.5px] border-x-0 py-1 self-center">
            <input id="searchBarField" type="text" placeholder="Search Pokemon" className="border-0 w-[100%] h-[100%] grow shrink pl-2" />
        </div>
        <div id="searchSection" className="px-5 border-[1.5px] rounded-r-2xl py-1 self-center">
            <i id="searchBtn" className="fa-solid fa-magnifying-glass fa-lg"></i>
        </div>
    </section>
  )
}

export default SearchBar