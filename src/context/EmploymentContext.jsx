import { useState, useEffect, useContext, createContext } from "react";

const EmploymentContext = createContext()

export const EmploymentProvider = ({children}) => {
    const [employment, setEmployment] = useState(false)

    return (
        <EmploymentContext.Provider value={{employment}}>
            {children}
        </EmploymentContext.Provider>
    )
}

export const useEmployment = () => useContext(EmploymentContext)