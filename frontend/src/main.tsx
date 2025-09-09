import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as AppProvider } from "./components/ui/provider.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.scss";
import { App } from "./App.tsx";
import { store } from "./redux/store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
