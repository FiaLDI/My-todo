import React from "react";
import { LoginForm } from "../../features/user/components/LoginForm";
import { useNavigate } from "react-router-dom";
import LangToggle from "../LanguageSwitcher";
import ThemeToggle from "../ThemeSwitcher";

export const Header: React.FC = () => {
    const navigator = useNavigate();

    return (
        <>
            <header>
                <div className="title-page" onClick={() => navigator(`/`)}>
          ToDo
                </div>
                <LoginForm />
                <div className="switchers">
                    <LangToggle />
                    <ThemeToggle />
                </div>
            </header>
        </>
    );
};
