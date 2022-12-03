import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App max={5} min={-5} />
    {/*<App max={5} />*/}
    {/*<App min={2} />*/}
  </React.StrictMode>
);

reportWebVitals();
