import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement) {
    const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
