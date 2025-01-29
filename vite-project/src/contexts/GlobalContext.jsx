import { useContext, createContext, useState } from "react";


const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    // Inizio elementi da esportare in global context
    const navLinks = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/movielist',
            title: 'Film'
        }
    ]
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    // Fine elementi da esportare in global context

    // Indico cosa esportare
    const globalProviderValue = {
        navLinks,
        backendUrl
    }

    return (
        <GlobalContext.Provider value={globalProviderValue}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContextProvider, useGlobalContext }