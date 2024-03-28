import {LOCAL_STORAGE_LOCAL_KEY, Theme, ThemeContext} from "../../components/ThemeContext/ThemeContext.tsx";
import {useContext} from "react";



interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void,
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    if (!setTheme || !theme) {
        throw new Error('setTheme is not defined in ThemeContext');
    }

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_LOCAL_KEY, newTheme)
    }
    return {
        theme,
        toggleTheme
    }
}
