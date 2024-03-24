import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CreateThread from './pages/CreateThread';
import ThreadDetail from './pages/ThreadDetail';

hydrate(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/thread/new" element={<CreateThread />} />
            <Route path="/thread/:id" element={<ThreadDetail />} />
        </Routes>
    </BrowserRouter>,
    document.querySelector('#app')
);
