import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme | undefined;
    setTheme?: (theme: Theme) => void | undefined;
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_LOCAL_KEY = 'theme';