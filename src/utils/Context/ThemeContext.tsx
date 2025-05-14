import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeContextType {
    theme: string;
    switchTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children } : { children: ReactNode }) {

    const [theme, setTheme] = useState("dark");
    const switchTheme = () => {
        theme == "dark" ? setTheme("light") : setTheme("dark");
    }

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme must be used within an AuthProvider");
    }
    return context;
}

export default ThemeProvider;