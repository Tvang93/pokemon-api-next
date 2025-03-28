const SaveToFavoritePokemons = (pokemon: string) => {
  if (typeof window != undefined) {
    let pokeArr = GetFavoritesFromLocalStorage();
    if (!pokeArr.includes(pokemon)) {
      pokeArr.push(pokemon);
    }
    localStorage.setItem("FavoritePokemons", JSON.stringify(pokeArr));
  }
};

const GetFavoritesFromLocalStorage = () => {
  if (typeof window != undefined) {
    let localStorageData = localStorage.getItem("FavoritePokemons");
    if (localStorageData == null) {
      return [];
    }
    return JSON.parse(localStorageData);
  }
};

const RemoveFromFavorites = (pokemon: string) => {
  if (typeof window != undefined) {
    let localStorageData = GetFavoritesFromLocalStorage();
    let nameIndex = localStorageData.indexOf(pokemon);
    localStorageData.splice(nameIndex, 1);
    localStorage.setItem("FavoritePokemons", JSON.stringify(localStorageData));
  }
};

const CheckFavoritePokemons = (pokemon: string) => {
  let pokeArr = GetFavoritesFromLocalStorage();
  if (pokeArr.includes(pokemon)) {
    return true;
  } else {
    return false;
  }
};

export {
  SaveToFavoritePokemons,
  GetFavoritesFromLocalStorage,
  RemoveFromFavorites,
  CheckFavoritePokemons,
};
