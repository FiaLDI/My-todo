import React, {
    useMemo,
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

interface LanguageContextType {
  idLanguage: number;
  languages: string[];
  changeLanguage: (idLanguage: number) => void;
}

// Создаем контекст с начальным значением
const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

// Провайдер контекста
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const { i18n } = useTranslation();
    const [idLanguage, setIdLanguage] = useState(0);
    const [languages, setLanguages] = useState(["en", "ru"]);

    const changeLanguage = (idLanguage: number) => {
        i18n.changeLanguage(languages[idLanguage]);
        setIdLanguage(idLanguage);
    };

    const value = useMemo(
        () => ({ idLanguage, languages, changeLanguage }),
        [idLanguage],
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

// Хук для использования контекста
export const useLang = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLogin must be used within a LoginProvider");
    }
    return context;
};
