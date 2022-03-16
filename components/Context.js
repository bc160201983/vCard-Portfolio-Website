import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <AppContext.Provider value={{ handleBack }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
