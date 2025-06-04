import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(() => {
    const storedData = localStorage.getItem('userData');   //The user data kept disappearing, so I asked one of my classmates and they suggested storing the user data in the local storage so it can record the users inputs
    return storedData ? JSON.parse(storedData) : { name: '', email: '' };
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useInfo() {
  return useContext(UserContext);
}
