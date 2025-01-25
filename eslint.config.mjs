import globals from "globals";
import jsConfig from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";  // Import the Prettier plugin
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";  // Import the TypeScript ESLint plugin

/** @type {import('eslint').Linter.FlatConfigArray} */
export default [
  // Настройка для всех файлов
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["node_modules/", "build/"], // Игнорируемые файлы и папки
    languageOptions: {
      parser: tsParser, // Используем TypeScript parser
      parserOptions: {
        ecmaVersion: "latest", // Поддержка последней версии ECMAScript
        sourceType: "module", // Модульный код
        ecmaFeatures: {
          jsx: true, // Включение поддержки JSX
        },
      },
      globals: globals.browser, // Глобальные переменные для браузера
    },
  },
  // Рекомендуемые правила JavaScript
  {
    rules: jsConfig.configs.recommended.rules,
  },
  // Рекомендуемые правила TypeScript
  {
    rules: tsPlugin.configs.recommended.rules,
  },
  // Рекомендуемые правила React
  {
    rules: reactPlugin.configs.recommended.rules,
  },
  // Кастомные правила
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Отключаем правило для импорта React
      "@typescript-eslint/no-unused-vars": "warn", // Предупреждения для неиспользуемых переменных
      "react/prop-types": "off", // Отключение проверки prop-types для TypeScript
      "react/display-name": "warn", // Включение правила для display-name в React компонентах
      "prettier/prettier": "error", // Интеграция Prettier в ESLint
      "indent": ["error", 4],
    },
    plugins: {
      prettier, // Указываем плагин Prettier в объекте
      "@typescript-eslint": tsEslintPlugin, // Указываем плагин TypeScript ESLint
      react: reactPlugin, // Указываем плагин React
    },
    settings: {
      react: {
        version: "detect", // Автоматическое определение версии React
      },
    },
  },
];
