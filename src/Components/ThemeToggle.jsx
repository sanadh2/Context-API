import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleTheme}>
      {isLightTheme ? "Dark Mode" : "Light Mode"}
      {/* <img src="/Images/brightness.png" style={{ width: "5rem" }} /> */}
    </button>
  );
};

export default ThemeToggle;
