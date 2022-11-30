import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CountProvider } from "./contexts/CountContext";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>
);
