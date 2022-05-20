import "antd/dist/antd.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from "react-dom/client"
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './mui/theme';

const rootElement = document.getElementById("root")

const root  = ReactDOMClient.createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

