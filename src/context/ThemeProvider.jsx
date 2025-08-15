import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null)

const ThemeProvider = ({ children }) => {

    const userTheme = () => {
        const getUserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        const isDarkTheme = getUserTheme ? 'dark' : 'light'

        const getTheme = localStorage.getItem('theme') || isDarkTheme
        const  currentTheme = getTheme === 'dark' ? 'dark' : 'light'

        return currentTheme
    }

    const [themeColor, setThemeColor] = useState(userTheme());

    const changeTheme = () => {
        setThemeColor(themeColor === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        localStorage.setItem('theme', themeColor)
    }, [themeColor])

    return (
        <ThemeContext.Provider value={{ changeTheme, themeColor }}>
            <div className={`box ${themeColor}`}>{ children }</div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
