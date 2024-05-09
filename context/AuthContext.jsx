"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';


const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        // flow: 'auth-code',
    });
    return (
        <AuthenticationContext.Provider value={{ user, login }}>
            {children}
        </AuthenticationContext.Provider>
    )

}

export default AuthenticationContext

export const useAuthContext = () => {
    return useContext(AuthenticationContext)
}