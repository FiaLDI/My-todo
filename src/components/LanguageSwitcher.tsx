import React from "react";
import { useTranslation } from "react-i18next";
import { useLang } from "../contexts/LanguageContext";

const LangToggle: React.FC = () => {
    const { idLanguage, languages, changeLanguage } = useLang(); // Получаем текущую тему и функцию переключения
    const { t } = useTranslation();

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(Number(e.target.value));
    };

    return (
        <>
            <div>
                <select name="" id="" onChange={changeHandler} value={idLanguage}>
                    {languages.map((val, idx) => (
                        <option key={idx} value={idx}>
                            {val}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default LangToggle;
