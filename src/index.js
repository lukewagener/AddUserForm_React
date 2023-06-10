/**
 * @file index.js
 * @author Luke Wagener
 * @date 6/10/2023
 * 
 * This is the entry point of the React application.
 * It imports the root App component and renders it into the DOM.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Initializes and renders the React application root.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
