import React, { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext"; // Импортируем хук
import { useTranslation } from "react-i18next";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme(); // Получаем текущую тему и функцию переключения
    const { t } = useTranslation();

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.style.setProperty("--main-color", "#333");
            root.style.setProperty("--font-color", "#fff");
            root.style.setProperty("--border-color", "rgb(56, 58, 59)");
            root.style.setProperty("--button-hover-color", "rgb(56, 58, 59)");
            root.style.setProperty("--button-color", "rgb(119, 119, 119)");
        } else {
            root.style.setProperty("--main-color", "rgb(157, 199, 247)");
            root.style.setProperty("--font-color", "#fff");
            root.style.setProperty("--border-color", "rgb(47, 141, 248)");
            root.style.setProperty("--button-hover-color", "rgb(47, 141, 248)");
            root.style.setProperty("--button-color", "rgb(128, 185, 250)");
        }
    }, [theme]);

    return (
        <button onClick={toggleTheme} className="theme-switcher">
            {theme === "light" ? t("dark") : t("light")}
        </button>
    );
};

export default ThemeToggle;
