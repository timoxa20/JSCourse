import React from 'react'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import './components/i18n/i18n.ts'
import ThemeProvidet from "./navigation/ThemeProvider/ThemeProvider.tsx";
import {render} from "react-dom";
import {Provider} from "react-redux";
import { setupStore} from "./store/store.ts";

const store = setupStore()

render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvidet>
              <Provider store={store}>
                  <App />
              </Provider>
          </ThemeProvidet>
      </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
)
