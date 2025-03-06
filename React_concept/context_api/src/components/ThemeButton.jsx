import { useContext, useEffect } from "react";

import ThemeContext from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <h1>Theme button component</h1>
      {theme}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
};

export default ThemeButton;
