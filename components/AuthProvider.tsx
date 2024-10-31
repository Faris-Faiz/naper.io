import React, { createContext, useState, useContext } from 'react';
// const jwt = require('jsonwebtoken');
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext<{
    token: string | null;
    data: Record<string, string | number>;
    login: (token: string) => void;
    logout: () => void;
}>({
    token: null,
    data: {},
    login: () => {},
    logout: () => {}
});

import { ReactNode } from 'react';

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>('');
    const [data, setData] = useState<Record<string, string | number>>({});

    const login = (newToken: string) => {
        setToken(newToken);
        setData(jwtDecode(newToken));
        // setData(jwt.decode(newToken) as Record<string, string | number>);

        // localStorage.setItem("token", newToken);
    };

    const logout = () => {
        setToken('');
        setData({});
        // localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, data, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
