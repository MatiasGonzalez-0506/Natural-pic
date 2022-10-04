import { createContext } from "react";

export const ContextApi = createContext();

const ApiContext = ({ children, value }) => {
  return (
   <>
    <ContextApi.Provider value={value}>
      {children}
    </ContextApi.Provider>
   </>
    );
};

export default ApiContext;