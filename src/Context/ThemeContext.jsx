import React, { Component, createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [Theme, setTheme] = useState({
    isLightTheme: false,
    light: { syntax: "black", ui: "#90EE90", bg: "#FFFDD0" },
    dark: { syntax: "white", ui: "green", bg: "#002d4f" },
  });

  const toggleTheme = () => {
    setTheme((prev) => ({
      ...prev,
      isLightTheme: !Theme.isLightTheme,
    }));
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: Theme.isLightTheme,
        light: Theme.light,
        dark: Theme.dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
