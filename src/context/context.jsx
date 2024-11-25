import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //dark theme context
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  //toggle dark theme
  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  }

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
