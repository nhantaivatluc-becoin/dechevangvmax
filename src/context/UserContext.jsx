import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {

  const [user, setUser] = useState({
    telegramId: "",
    username: "admin",
    gold: 1000,
    diamond: 0,
    vip: 0,
    invite: 0
  });

  const updateUser = (data) => {
    setUser(prev => ({
      ...prev,
      ...data
    }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser(){
  return useContext(UserContext);
}
