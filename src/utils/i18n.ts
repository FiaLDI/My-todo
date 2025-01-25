import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                changeLanguage: "Change language",
                username: "Username",
                password: "Password",
                light: "Light",
                dark: "Dark",
                login: "Login",
                hello: "Hello",
                yourpassword: "your password",
                exit: "Exit",
                createtask: "Create new task",
                create: "Create",
                complete: "Complete/UnComplete",
                details: "Details",
                remove: "Remove",
                save: "Save",
                profile: "Profile",
                entertitle: "Enter title",
                enterdescription: "Enter description",
            },
        },
        ru: {
            translation: {
                changeLanguage: "Изменить язык",
                username: "Имя",
                password: "Пароль",
                light: "Светлая тема",
                dark: "Темная тема",
                login: "Войти",
                hello: "Здравствуйте",
                yourpassword: "ваш пароль",
                exit: "Выйти",
                createtask: "Создание нового Task",
                reate: "Создать",
                complete: "Завершить/Не завершить",
                details: "Детали",
                remove: "Удалить",
                save: "Сохранить",
                profile: "Профиль",
                entertitle: "Введите название",
                enterdescription: "Введите описание",
            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
