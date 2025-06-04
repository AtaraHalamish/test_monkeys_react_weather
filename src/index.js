import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

// <React.StrictMode> generates additional checks and warnings for its descendants.
// It helps identify potential problems in an application, such as deprecated APIs or unsafe lifecycle methods.
// to avoid calling the App function twice, you can remove the <React.StrictMode> wrapper.
// and replace it with <React.Fragment> component call.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
