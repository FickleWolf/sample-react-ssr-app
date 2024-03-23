import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateThred from './pages/CreateThread'
import ThreadDetail from './pages/ThreadDetail'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App />}></Route>
      <Route path={'/thread/new'} element={<CreateThred />}></Route>
      <Route path={'/thread/:id'} element={<ThreadDetail />}></Route>
    </Routes>
  </BrowserRouter>
)
