import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => setIsDark(!isDark);
  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
      {isDark && (
        <style>
          {`body {
          background-color: black;
          color: white;
        }`}
        </style>
      )}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
