import { createContext, useContext, useState } from "react";

const MetamaskContext = createContext(null)

export default function MetamaskProvider({ children }) {
    const [account, setAccount] = useState(null)



    return (
        <MetamaskContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </MetamaskContext.Provider>
    )
}

export function useMetamask() {
    const context = useContext(MetamaskContext)

    if (!context) {
        throw new Error('useMetamask must be used within a MetamaskProvider')
    }

    const { account,setAccount } = context

    return {
        account,
        setAccount
    }
}