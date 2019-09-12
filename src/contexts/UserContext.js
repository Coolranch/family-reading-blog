import React, { useContext, useState } from 'react';

const UserContext = React.createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [firebaseUser, setFirebaseUser] = useState(null);

    const setUser = (user) => {
        setFirebaseUser(user);
    };

    const value = {
        firebaseUser,
        setUser
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}