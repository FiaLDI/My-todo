import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { user } from "../types";
import { login, exit } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const loginFormInit: user = {
    login: "",
    password: "",
};

export const LoginForm = (): React.JSX.Element => {
    const userInfo = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigator = useNavigate();
    const [loginForm, setloginForm] = useState<user>(loginFormInit);
    const { t } = useTranslation();

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setloginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handlerLogin = () => {
        dispatch(login({ ...loginForm, auth: true }));
        setloginForm(loginFormInit);
    };

    const handlerExit = () => {
        dispatch(exit());
    };

    return (
        <>
            {userInfo.auth ? (
                <div className="auth">
                    <div className="auth-success">
                        {t("hello")}, {userInfo.login},
                    </div>
                    <div className="button-container">
                        <button
                            onClick={() => {
                                navigator(`/profile`);
                            }}
                        >
                            {t("profile")}
                        </button>
                    </div>
                    <div className="button-container">
                        <button onClick={handlerExit}>{t("exit")}</button>
                    </div>
                </div>
            ) : (
                <div className="form-container login-form">
                    <div className="input-container">
                        <input
                            type="text"
                            name="login"
                            value={loginForm.login}
                            onChange={handlerChange}
                            placeholder={t("username")}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            name="password"
                            value={loginForm.password}
                            onChange={handlerChange}
                            placeholder={t("password")}
                        />
                    </div>

                    <div className="button-container">
                        <button onClick={handlerLogin}>{t("login")}</button>
                    </div>
                </div>
            )}
        </>
    );
};
