export interface PokeInfo1 {
  pokeName: string;
  pokeId: number;
  pokeImageDefault: string;
  pokeImageShiny: string;
  pokeMoves: [
    move: {
      move: {
        name: string;
      };
    }
  ];
  pokeAbilities: [
    ability: {
      ability: {
        name: string;
      };
    }
  ];
  pokeLocations: [
    location_area: {
      location_area: {
        name: string;
      };
    }
  ];
  pokeTypes: [
    type: {
      type: {
        name: string;
      };
    }
  ];
  pokeEvolutions: {
    chain: {
        species: {
            name: string
        }
        evolves_to: {
            species: {
                name:string
            }
            evolves_to: {
                species: {
                    name: string
                }
            }[]
        }[]
    }
  };
}

export interface PokeMoves {
  pokeMoves: [
    move: {
      move: {
        name: string;
      };
    }
  ];
}

export interface PokeAbilities {
  pokeAbilities: [
    ability: {
      ability: {
        name: string;
      };
    }
  ];
}

export interface PokeLocations {
  pokeLocations: [
    location_area: {
      location_area: {
        name: string;
      };
    }
  ];
}

export interface PokeTypes {
  pokeTypes: [
    type: {
      type: {
        name: string;
      };
    }
  ];
}

// export interface PokeEvolutions {
//   pokeEvolutions: {
//     chain: {
//       species: {
//         name: string;
//       };
//       evolves_to: {
//         species: {
//           name: string;
//         };
//         evolves_to: {
//           species: {
//             name: string;
//           };
//         };
//       }[];
//     };
//   };
// }

export interface PokeEvolutions {
    pokeEvolutions:
    {chain: {
        species: {
            name: string
        }
        evolves_to: {
            species: {
                name:string
            }
            evolves_to: {
                species: {
                    name: string
                }
            }[]
        }[]
    }}
}