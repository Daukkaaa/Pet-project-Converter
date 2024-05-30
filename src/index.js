import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; 

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading....</div>}>
            <App />
        </Suspense>
    </React.StrictMode>
);


