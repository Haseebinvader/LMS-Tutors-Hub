import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "@mui/material/styles";
import Theme from './Theme/Theme.js';
import { CssBaseline } from "@mui/material";
import axios from "axios"
import './index.css'
axios.defaults.baseURL = "https://tutor4u-production.up.railway.app/api"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
)
