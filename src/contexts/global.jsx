import { createContext, useContext, useState } from "react"

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    const [isFirstAccess, setIsFirstAccess] = useState(true)

    const firstAccess = () => {
        setIsFirstAccess(false)
    }
    return <GlobalContext.Provider value = {{isFirstAccess, firstAccess}}>{children}</GlobalContext.Provider>
}

export const useGlobal = () => {
    return useContext(GlobalContext)}
