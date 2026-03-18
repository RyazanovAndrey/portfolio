import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {

    const [themeColor, setThemeColor] = useState('light')

    const updateTheme = (theme) => {
        setThemeColor(theme)
        localStorage.setItem('theme', theme)
        document.body.classList.toggle('dark', theme == 'dark')
    }

    const toggleTheme = () => {
        updateTheme(themeColor == 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        const userTheme = window.matchMedia('(prefers-color-shema: dark)').matches ? 'dark' : 'light'
        const currentTheme = localTheme || userTheme
        document.body.classList.toggle('dark', currentTheme == 'dark')
        setThemeColor(currentTheme)
    }, []);

    return (
        <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)