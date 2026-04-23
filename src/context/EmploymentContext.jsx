import { useState, useEffect, useContext, createContext } from "react";

const EmploymentContext = createContext()

export const EmploymentProvider = ({children}) => {
    const [employment, setEmployment] = useState(true)

    return (
        <EmploymentContext.Provider value={{employment, setEmployment}}>
            {children}
        </EmploymentContext.Provider>
    )
}

export const useEmployment = () => useContext(EmploymentContext)