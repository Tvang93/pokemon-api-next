export interface PokeInfo1 {
    pokeName: string
    pokeId: number
    pokeImageDefault: string
    pokeImageShiny: string
    pokeMoves: [
        move: { move: {
            name: string
        }}
    ]
    pokeAbilities: [
        ability : { ability: {
            name: string
        }}
    ]
    pokeLocations: [
        location_area : { location_area: {
            name: string
        }}
    ]
}

export interface PokeMoves {
    pokeMoves: [
        move: { move: {
            name: string
        }}
    ]
}


export interface PokeAbilities {
    pokeAbilities: [
        ability : { ability: {
            name: string
        }}
    ]
}

export interface PokeLocations {
    pokeLocations: [
        location_area : { location_area: {
            name: string
        }}
    ]
}

export interface PokeTypes {
    pokeMoves: []
}