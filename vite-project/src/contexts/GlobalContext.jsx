import { useContext, createContext, useState } from "react";


const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    // Inizio elementi da esportare in global context
    // const blabla = test
    // Fine elementi da esportare in global context

    // Indico cosa esportare
    const globalProviderValue = {
        //blabla
    }

    return (
        <GlobalContext.Provider value={globalProviderValue}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContextProvider, useGlobalContext }