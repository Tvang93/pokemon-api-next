'use client'

import { isFavTabActive } from "@/lib/interfaces"
import React, { createContext, useContext, useState } from "react"

const FavoritesContext = createContext<isFavTabActive>({
    isFavTabActive: false,
    setIsFavTabActive: (bool: boolean) => false
})

export function FavoritesWrapper({children}: {children: React.ReactNode}){
    const [isFavTabActive, setIsFavTabActive] = useState<boolean>(false)

    return (
        <FavoritesContext.Provider value={{isFavTabActive, setIsFavTabActive}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoritesContext() {
    return useContext(FavoritesContext)
}