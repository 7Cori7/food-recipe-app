import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalState from './context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <GlobalState>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </GlobalState>
        
    </BrowserRouter>
);
