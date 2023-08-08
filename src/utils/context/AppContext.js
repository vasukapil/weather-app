import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric");

  return (
    <AppContext.Provider value={{ unit, setUnit }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
