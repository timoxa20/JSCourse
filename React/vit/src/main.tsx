import React from 'react'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import './components/i18n/i18n.ts'
import ThemeProvidet from "./navigation/ThemeProvider/ThemeProvider.tsx";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {persistor, setupStore} from "./store/store.ts";
import {PersistGate} from "redux-persist/integration/react";

const store = setupStore()

render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvidet>
              <Provider store={store}>
                  <PersistGate persistor={persistor}>
                  <App />
                  </PersistGate>
              </Provider>
          </ThemeProvidet>
      </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
)
