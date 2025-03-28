import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'

import App from './App';
import '@/assets/css/index.less'
import store from './store';
import theme from './assets/theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <HashRouter>
      <Provider store={store} >
        <ThemeProvider theme={theme} >
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  // </React.StrictMode>
)

