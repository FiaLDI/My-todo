import React, {
    useEffect,
    createContext,
    useContext,
    useState,
    ReactNode,
    useMemo,
} from "react";

// Определяем типы для контекста
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

function useLocalStorage<T>(key: string, initialValue: T) {
    // Получаем значение из localStorage или используем начальное значение
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Функция для обновления значения
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore =
        value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue] as const;
}

// Создаем контекст с начальным значением
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Провайдер контекста
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [themeStorage, setThemeStorage] = useLocalStorage<"light" | "dark">(
        "theme",
        "light",
    );
    const [theme, setTheme] = useState<Theme>(themeStorage); // Начальное состояние темы

    useEffect(() => {
        setTheme(themeStorage);
    }, [themeStorage]);

    useEffect(() => {
        setThemeStorage(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "dark" ? "light" : "dark";
            setThemeStorage(newTheme);
            return newTheme;
        });
    };

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

// Хук для использования контекста
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
