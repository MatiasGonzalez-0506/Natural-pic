import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children, value }) => {
  return (
   <>
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
   </>
    );
};

export default UserProvider;