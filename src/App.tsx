import React, { StrictMode } from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { AppRouter } from "./routes/AppRouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./utils/i18n";

const App = () => {
    return (
        <StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          <Provider store={store}>
                        <AppRouter />
          </Provider>
        </LanguageProvider>
      </ThemeProvider>
    </StrictMode>
    );
};

export default App;
