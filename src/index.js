import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkModeContexProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
  <DarkModeContexProvider>

    <App />

 </DarkModeContexProvider>
 </AuthContextProvider>
   
  </React.StrictMode>
);


