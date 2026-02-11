import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  //const url = "https://library-management-system-backend-nac4.onrender.com";
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const storedToken = localStorage.getItem("user_token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  
  const storeVal = {
    token,
    setToken,
    //url,
    API_BASE_URL,
  };

  return (
    <StoreContext.Provider value={storeVal}>
      {children}
    </StoreContext.Provider>
  );
};
