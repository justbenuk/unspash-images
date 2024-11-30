import { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext();

//check local storage for prefrence to dark mode
function getInitialDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)",
  ).matches;
  const storedDarkTheme = localStorage.getItem("darkTheme");

  if (storedDarkTheme === null) {
    return prefersDarkMode;
  }
  return storedDarkTheme === true;
}
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("coding");

  //toggle dark theme
  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  }

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
