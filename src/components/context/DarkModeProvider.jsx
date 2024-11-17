import React, { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const localThemeMode = localStorage.getItem("themeMode");

    if (
      localThemeMode === "dark" ||
      (!localThemeMode &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      toggleDarkMode();
      console.log(`darkMode2: ${darkMode}`);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
