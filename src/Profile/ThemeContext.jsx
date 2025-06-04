import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "DarkMode");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "DarkMode" ? "LightMode" : "DarkMode"));
    };

    const setDarkTheme = () => setTheme("DarkMode");
    const setLightTheme = () => setTheme("LightMode");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setDarkTheme, setLightTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
