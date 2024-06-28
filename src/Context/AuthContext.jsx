import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTokenFromLocalStorage, saveTokenToLocalStorage } from '../Utils/LocalStorageUtils'; // فرضا توکن از localStorage برای نگهداری استفاده شده است


const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [token , setToken] = useState(null);
    const [user , setUser] = useState(null);

    useEffect(()=>{
        const storedToken = getTokenFromLocalStorage();
        if (storedToken){
            setToken(storedToken)
        }
    },[])

    const login = (token) => {
        setToken(token);
        saveTokenToLocalStorage(token)
    }
    const logout = () => {
        localStorage.removeItem('token');

        setToken(null);
        setUser(null);
        // Clear token from localStorage or perform any other cleanup
      };

      const updateUser = (userData) => {
        setUser(userData);
      };


        return (
            <AuthContext.Provider value={{ token, user, login, logout, updateUser }}>
            {children}
            </AuthContext.Provider>
        );
};
export const useAuth = () => useContext(AuthContext);

