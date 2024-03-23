import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateThred from './pages/CreateThread'
import ThreadDetail from './pages/ThreadDetail'
import App from './App'
import './client.css'

const Client = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}></Route>
        <Route path={'/thread/new'} element={<CreateThred />}></Route>
        <Route path={'/thread/:id'} element={<ThreadDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Client;
