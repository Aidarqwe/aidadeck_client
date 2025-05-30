import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthStore from './store/AuthStore';



export const store = new AuthStore();

export const Context = createContext({
    store,
});


const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);

    root.render(
        <Context.Provider value={{ store }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context.Provider>
    );
} else {
    console.error('Root element not found');
}