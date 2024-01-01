import { createContext, useState } from "react";

interface AuthData {
    token: string
    email: string
    senha: string
}

interface AuthContextData {
    authData: AuthData,
    singIn: () => Promise<AuthData>
    singOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuthData] = useState();

    function singIn() {

    }

    function singOut() {
        
    }

    return <AuthProvider.Provider value={{authData, singIn, singOut}}>{children}</AuthProvider.Provider>
}